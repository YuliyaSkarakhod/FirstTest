require("dotenv").config();
var standardZPO = require("../data/standardZPO.json");
var objectPage = require("../module/objectPage.js");
var elementsData = require("../data/elementsData.json");
var generalData = require("../data/generalData.json");
var listReportPage = require("../module/listReportPage.js");

describe("Create a new Purchase Order", function () {

    it("Step 01: Access the system and navigate to the Manage Purchase Orders app", async function () {
      await ui5.navigation.navigateToApplication(generalData.appName);
    });

    it("Step 02: App login", async function () {
      await ui5.session.login(process.env.USER, process.env.PASSWORD);
    });

    it("Step 03: Click Create on the list report page", async function () {
    await listReportPage.clickLR (
      elementsData.button.createFromLR.metadata,
      elementsData.button.createFromLR.id
  );
});

    it("Step 04: Select Purchase Order Type", async function () {
      await objectPage.fillInFields(
        elementsData.combobox.purchaseOrderType.type,
        elementsData.combobox.purchaseOrderType.metadata,
        elementsData.combobox.purchaseOrderType.id,
        standardZPO.generalInformation.purchaseOrderType
      );
    });

    it("Step 05: Choose Supplier - 50000040", async function () {
      await objectPage.fillInFields(
        elementsData.field.supplier.type,
        elementsData.field.supplier.metadata,
        elementsData.field.supplier.id,
        standardZPO.generalInformation.supplier
        );
    });

    it("Step 06: Choose Currency - EUR", async function () {
      await objectPage.fillInFields(
        elementsData.field.currency.type,
        elementsData.field.currency.metadata,
        elementsData.field.currency.id,
        standardZPO.generalInformation.currency
        );
        await common.userInteraction.pressEnter();
    });

    it("Step 07: Choose Purchasing Groupe - 001", async function () {
      await objectPage.fillInFields(
        elementsData.field.purchasingGroup.type,
        elementsData.field.purchasingGroup.metadata,
        elementsData.field.purchasingGroup.id,
        standardZPO.generalInformation.purchasingGroup
        );
        await common.userInteraction.pressEnter();
    });

    it("Step 08: Choose Purchasing Organization - 1010", async function () {
      await objectPage.fillInFields(
        elementsData.field.purchasingOrganization.type,
        elementsData.field.purchasingOrganization.metadata,
        elementsData.field.purchasingOrganization.id,
        standardZPO.generalInformation.purchasingOrganization
        );
        await common.userInteraction.pressEnter();
    });

    it("Step 09: Choose Company Code - 1010", async function () {
      await objectPage.fillInFields(
        elementsData.field.companyCode.type,
        elementsData.field.companyCode.metadata,
        elementsData.field.companyCode.id,
        standardZPO.generalInformation.companyCode
        );
        await common.userInteraction.pressEnter();
    });
    
    it("Step 10: Navigate to the Items tab", async function () {
      await objectPage.navigateToItems(
        elementsData.button.items.metadata,
        elementsData.button.items.id);
    });


    var itemArr = standardZPO.items
    for (let [itemIndex, itemValue] of itemArr.entries()) {

   it("Step 11: Add PO Item", async function () {
      await objectPage.addItem (
        elementsData.button.createNewItem.metadata,
        elementsData.button.createNewItem.id
            );
        });   
    

      it("Step 12: Select Item Category - Standard", async function () {
        await objectPage.fillInFields (
          elementsData.field.itemCategory.type,
          elementsData.field.itemCategory.metadata,
          elementsData.field.itemCategory.path,
          itemValue.itemCategory,
          itemValue.item
        );
      });

      it("Step 13: Specify Material - WM-D03", async function () {
        await objectPage.fillInFields (
          elementsData.field.Material.type,
          elementsData.field.Material.metadata,
          elementsData.field.Material.path,
          itemValue.Material,
          itemValue.item
        );
        await common.userInteraction.pressEnter();
      });

      it("Step 14: Specify Plant - 1010", async function () {
        await objectPage.fillInFields (
          elementsData.field.plant.type,
          elementsData.field.plant.metadata,
          elementsData.field.plant.path,
          itemValue.plant,
          itemValue.item
        );
        await common.userInteraction.pressEnter();
      });

      it("Step 15: Specify Quantity - 15", async function () {
        await objectPage.fillInFields (
          elementsData.field.orderQuantity.type,
          elementsData.field.orderQuantity.metadata,
          elementsData.field.orderQuantity.path,
          itemValue.orderQuantity,
          itemValue.item
        );
        await common.userInteraction.pressEnter();
      });

    }

it("Step 16: Click Create Button", async function () {
  await objectPage.clickOP (
    elementsData.button.createFromOP.metadata,
    elementsData.button.createFromOP.id);
});

it("Step 17: Get ID of the newly created PO", async function () {
  const selector = {
    "elementProperties": {
      "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
      "metadata": "sap.m.Title",
      "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
    }   
  };

  const purchaseOrderID = await ui5.element.getPropertyValue(selector, "text");;
  util.console.log(purchaseOrderID);
  const userData = {
    "purchaseOrder": purchaseOrderID
  };
  browser.config.params.export.purchaseOrder = userData;

  const references = browser.config.params.import.data["references"];
  references.purchaseOrderNumber = purchaseOrderID;
});

it("Step 18: Logging Out", async function () {
  await ui5.session.logout();
});

  });