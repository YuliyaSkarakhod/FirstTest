require("dotenv").config();
var generalData = require("../data/generalData.json");
var elementsData = require("../data/elementsData.json");
const listReportPage = require("../module/listReportPage.js");

describe("Find the newly created Purchase Order", function () {

    it("Step 01: Access the system and navigate to the Manage Purchase Orders app", async function () {
      await ui5.navigation.navigateToApplication(generalData.appName);
    });

    it("Step 02: App login", async function () {
      await ui5.session.login(process.env.USER, process.env.PASSWORD);
      await browser.pause(3000);
    });

    it("Step 03: Specify the PO ID", async function () {
      const references = browser.config.params.import.data["references"];
      common.assertion.expectDefined (references);
      await common.assertion.expectDefined (references.purchaseOrderNumber);
      await listReportPage.fillInFields (
          elementsData.field.purchaseOrderLR.metadata,
          elementsData.field.purchaseOrderLR.id,
          references.purchaseOrderNumber
      );
      await common.userInteraction.pressEnter();
      await browser.pause(3000);
    });

    it("Step 04: Click Go to execute report", async function () {
      await listReportPage.executeLR (
        elementsData.button.goOnLR.metadata,
        elementsData.button.goOnLR.id
            );
        });  

    it("Step 05: Open the newly created PO", async function () {
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);
        await listReportPage.openPO (
        elementsData.button.selectPO.metadata
        )
      
        // const selector = {
        //   "elementProperties": {
        //     "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        //     "metadata": "sap.ui.core.Icon",
        //     "bindingContextPath": `*${references.purchaseOrderNumber}*`
        //   }   
        // };
        // await ui5.userInteraction.click(selector);
      });

      it("Step 06: Validate PO", async function () { 
        const selector = {
          "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
          }   
        };
        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await ui5.assertion.expectAttributeToBe(selector, "text", references.purchaseOrderNumber);
        await browser.pause(3000)
      });
  
    
})