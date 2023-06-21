require("dotenv").config()
describe("Create a new Purchase Order", function () {

    it("Step 01: Access the system and navigate to the Manage Purchase Orders app", async function () {
      await ui5.navigation.navigateToApplication("PurchaseOrder-manage");
      await browser.pause(3000)
    });

    it("Step 02: App login", async function () {
      await ui5.session.login(process.env.USER, process.env.PASSWORD);
      await browser.pause(3000)
    });

    it("Step 03: Click Create", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
          "metadata": "sap.m.Button",
          "id": "*addEntry"
        }   
      };
      await ui5.userInteraction.click(selector);
      await browser.pause(3000)
    });

    it("Step 04: Select Purchase Order Type", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.ComboBox",
          "id": "*PurchaseOrderType::Field-comboBoxEdit"
        }   
      };
      actualValue = "Standard Z-PO (ZNB)"
      await ui5.userInteraction.selectComboBox(selector, actualValue);
      await browser.pause(3000)
    });

    it("Step 05: Choose Supplier - 50000041", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet1::Supplier::Field-input"
        }   
      };
      valueToEnter = "50000041"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
      await browser.pause(3000)
    });

    it("Step 06: Choose Currency - EUR", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
        }   
      };
      valueToEnter = "EUR"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
      await browser.pause(3000)
    });

    it("Step 07: Choose Purchasing Groupe - 001", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
        }   
      };
      valueToEnter = "001"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
      await browser.pause(3000)
    });

    it("Step 08: Choose Purchasing Organization - 1010", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
        }   
      };
      valueToEnter = "1010"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
      await browser.pause(3000)
    });

    it("Step 09: Choose Company Code - 1010", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
        }   
      };
      valueToEnter = "1010"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
      await browser.pause(3000)
    });

    
    it("Step 10: Navigate to the Items tab", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Button",
          "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
        }   
      };
    
      await ui5.userInteraction.click(selector);
      await browser.pause(30000)
    });


  });