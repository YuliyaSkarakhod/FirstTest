describe("Open the app", function () {

    it("Step 01: Navigate to your application", async function () {
      await ui5.navigation.navigateToApplication("masterDetail-display&/?sap-iapp-state--history=TAS0548WZUOPVCI95QPR2TN25VB6CF3IUTSJ1LDXX&sap-iapp-state=TASOPOBS305VR9GWCKB9HNZ8OZP56F9MXWBNR2XSD");
      await browser.pause(2000)
    });

it("Step 02: Open Supplier Selection", async function () {
  const selector = {
    "elementProperties": {
      "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
      "metadata": "sap.ui.core.Icon",
      "id": "*Supplier-multiinput-vhi"
    }   
  };

  await ui5.userInteraction.click(selector);
  await browser.pause(2000)
});


it("Step 03: Select Becker Berlin", async function () {
  const selector = {
    "elementProperties": {
      "metadata": "sap.m.CheckBox",
      "id": "*8"
    }   
  };

  await ui5.userInteraction.click(selector);
  await browser.pause(2000)
});

it("Step 03: Select Alpine Systems", async function () {
  const selector = {
    "elementProperties": {
      "metadata": "sap.m.CheckBox",
      "id": "*3"
    }   
  };

  await ui5.userInteraction.click(selector);
  await browser.pause(2000)
});

it("Step 04: Confirm Supplier Selection", async function () {
  const selector = {
    "elementProperties": {
      "metadata": "sap.m.Button",
      "id": "*ok"
    }   
  };
  await ui5.userInteraction.click(selector);
  await browser.pause(2000)
});

it("Step 05: Open Category Selection", async function () {
  const selector = {
    "elementProperties": {
      "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
      "metadata": "sap.ui.core.Icon",
      "id": "*MainProductCategory-vhi"
    }   
  };
  await ui5.userInteraction.click(selector);
  await browser.pause(2000)
});

it("Step 06: Select Category", async function () {
  const selector = {
    "elementProperties": {
      "metadata": "sap.m.Input",
      "id": "*input"
    }   
  };

  valueToEnter = "Computer Systems"
  await ui5.userInteraction.clearAndFill(selector, valueToEnter);
  await browser.pause(2000)

});

  it("Step 07: Confirm Category Selection", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.m.Button",
        "id": "*valueHelpDialog-ok"
      }   
    };
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)
  });


  it("Step 08: Add filter", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.m.Button",
        "id": "*listReportFilter-btnFilters"
      }   
    };
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)
  });

  it("Step 09: Search for Sub-Category Filter", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.SearchField",
        "id": "*searchField"
      }   
    };
  
    valueToEnter = "Sub-Category"
    await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    await browser.pause(3000)
  });


  it("Step 10: Select Sub-Category Filter", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.CheckBox",
        "id": "*selectMulti"
      }   
    };
   
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)
  });


  it("Step 11: Confirm Sub-Category Filter Selection", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.m.Button",
        "id": "*listReportFilter-adapt-filters-dialog-confirmBt"
      }   
    };
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)
  });

  it("Step 12: Open Category Selection", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.ui.core.Icon",
        "id": "*listReportFilter-filterItemControlQuickView-ProductCategory-vhi"
      }   
    };
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)

  });

  it("Step 13: Select Sub-Category", async function () {
    const selector = {
      "elementProperties": {
        "metadata": "sap.m.Input", 
        "id": "*input"
      }   
    };
  
    valueToEnter = "Notebooks"
    await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    await browser.pause(2000)
  
  });

  it("Step 14: Confirm Sub-Category Selection", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
        "metadata": "sap.m.Button",
        "id": "*ProductCategory-valueHelpDialog-ok"
      }   
    };
    await ui5.userInteraction.click(selector);
    await browser.pause(2000)
  });

    it("Step 15: Click 'Go' on ListReport", async function () {
      const selector = {
        "elementProperties": {
          "metadata": "sap.m.Button",
          "id": "*listReportFilter-btnGo"
        }   
      };
      await ui5.userInteraction.click(selector);
      await browser.pause(2000)
    });

    it("Step 15: Open the Item 1", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
          "metadata": "sap.m.ColumnListItem", 
          "id": "*ListReportTable:::ColumnListItem"
        }   
      };
      await ui5.userInteraction.click(selector);
      await browser.pause(4000)
    });

    it("Step 16: Navigate to the pevious page", async function () {
      await ui5.navigation.navigateToApplication("https://sapui5.hana.ondemand.com/test-resources/sap/suite/ui/generic/template/demokit/sample.manage.products.sepmra/test/index.html#masterDetail-display&/?sap-iapp-state--history=TASSXJRL3R0H2GKK5VVR87D7YME98OJVZZ0JCYTB6&sap-iapp-state=TAS9PTR7AN3BRQ6PX36TEU6EDG6H0AIIDM4C101V5");
      await browser.pause(2000)
    });


    it("Step 17: Open the Item 2", async function () {
      const selector = {
        "elementProperties": {
          "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
          "metadata": "sap.m.ColumnListItem", 
          "id": "*ListReportTable:::ColumnListItem"
        }   
      };
      await ui5.userInteraction.click(selector);
      await browser.pause(6000)
    });
 
  });