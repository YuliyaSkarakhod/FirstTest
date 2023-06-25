require("dotenv").config()
describe("Create a new Purchase Order", function () {

    it("Step 01: Access the system and navigate to the Manage Purchase Orders app", async function () {
      await ui5.navigation.navigateToApplication("PurchaseOrder-manage");
    });

    it("Step 02: App login", async function () {
      await ui5.session.login(process.env.USER, process.env.PASSWORD);
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
    });

    it("Step 05: Choose Supplier - 50000040", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "id": "*GeneralInformationFacet1::Supplier::Field-input"
        }   
      };
      valueToEnter = "50000040"
      await ui5.userInteraction.clearAndFill(selector, valueToEnter);
      await common.userInteraction.pressEnter();
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
    });

    
    it("Step 10: Navigate to the Items tab", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Button",
          "id": "*ItemsFacet::Section-anchor"
        }   
      };
    
      await ui5.userInteraction.click(selector);
    });

    it("Step 11: Add Purchase Order Item", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Button",
          "id": "*addEntry"
        }   
      };
      await ui5.userInteraction.click(selector);
    });

    it("Step 12: Select Item Category - Standard", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.ComboBox",
          "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*`,
        }   
      };
      actualValue = "Standard"
      await ui5.userInteraction.selectComboBox(selector, actualValue);
    });

    
    it("Step 13: Specify Material - WM-D03", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
          "metadata": "sap.m.Input",
          "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*`,
          "value": [{
            "path": "ManufacturerMaterial"}]
        }   
      };

    const valueToEnter = "WM-D03"
    await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    await common.userInteraction.pressEnter();
  });

  it("Step 14: Specify Plant - 1010", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*`,
        "value": [{
          "path": "Plant"}]
      }   
    };
  
  const valueToEnter = "1010"
  await ui5.userInteraction.clearAndFill(selector, valueToEnter);
  await common.userInteraction.pressEnter();
  });

  it("Step 15: Specify Quantity - 15", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        "metadata": "sap.m.Input",
        "bindingContextPath": `/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*`,
        "value": [{
          "path": "OrderQuantity"}]
      }   
    };

  const valueToEnter = "15"
  await ui5.userInteraction.clearAndFill(selector, valueToEnter);
  await common.userInteraction.pressEnter();

});


it("Step 16: Click Create Button", async function () {
  const selector = {
    "elementProperties": {
      "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
      "metadata": "sap.m.Button",
      "id": "*activate"
    }   
  };
  await ui5.userInteraction.click(selector);
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

  // use the reference file
  const references = browser.config.params.import.data["references"];
  references.purchaseOrderNumber = purchaseOrderID;
});

it("Step 18: Logging Out", async function () {
  await ui5.session.logout();
  await browser.pause(3000)
});

  });