const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

    baseUrl: "https://sapui5.hana.ondemand.com/test-resources/sap/suite/ui/generic/template/demokit/sample.manage.products.sepmra/test/index.html",

    specs: [
        [
            "./specs/01_createNewPO.spec.js",
            "./specs/02_checkListReport.spec.js"
        ],
    ],

    framework: 'mocha',
    mochaOpts: {
        timeout: 120000,
        bail: true
    },
    
    maxInstances: 3,
    
    services: [[QmateService],['chromedriver']],

    capabilities: [{
        // capabilities for local browser web tests
        browserName: "chrome", 
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                "--output=/dev/null",
                // "--log-level=3",
                // "--no-sandbox",
                // "--incognito",
                // "--ignore-certificate-errors",
                // "--window-size=1920,1200",
                // "--whitelisted-ips",
                // "--disable-dev-shm-usage",
                // "--headless",
                // "--disable-gpu",
                // "--disable-web-security",
                // "--disable-infobars",
                // "--disable-extensions",
                // "--disable-logging",
                // "--lang=en-US"
            ]
        }
    }],

};
