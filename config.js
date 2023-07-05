const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {

    baseUrl: "https://us4.leverx.local:44302/sap/bc/ui2/flp?sap-client=100&sap-language=EN",

    specs: [
        [
            "./specs/01_createNewPO.spec.js",
            "./specs/02_checkListReport.spec.js"
        ],
    ],

    framework: 'mocha',
    mochaOpts: {
        timeout: 240000,
        bail: true
    },
    
    params: {
        QmateCustomTimeout: 700000,
    import: {
        data: "./data/",
        purchaseOrder:"./data/references.json"
    },
    export: {
        purchaseOrder: "./data/references.json"
    }
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
                "--log-level=3",
                "--no-sandbox",
                "--incognito",
                "--ignore-certificate-errors",
                "--window-size=1920,1200",
                // "--whitelisted-ips",
                // "--disable-dev-shm-usage",
                // "--headless",
                // "--disable-gpu",
                "--disable-web-security",
                // "--disable-infobars",
                // "--disable-extensions",
                // "--disable-logging",
                "--lang=en-US"
            ]
        }
    }],

};
