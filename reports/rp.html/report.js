$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApplyNoe.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "application verification",
  "description": "",
  "id": "apply-for-jobs;application-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on carriers",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on ApplyNow",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on ApplyNow",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "application page verified",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 101413955900,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_carriers()"
});
formatter.result({
  "duration": 26904472400,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_ApplyNow()"
});
formatter.result({
  "duration": 3892286900,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.click_on_ApplyNow()"
});
formatter.result({
  "duration": 5773236300,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.application_page_verified()"
});
formatter.result({
  "duration": 309000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "duration": 43460780300,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.HomepageStepdefination.close_the_driver(HomepageStepdefination.java:97)\r\n\tat ✽.And close the driver(ApplyNoe.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("CarriersPage.feature");
formatter.feature({
  "line": 1,
  "name": "subscription verification",
  "description": "",
  "id": "subscription-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "successfull subscription",
  "description": "",
  "id": "subscription-verification;successfull-subscription",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on TVunit",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "close popup",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on product tv",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user navigated to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "page is verified",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user hover on material and check ckeckbox",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verifies correct text",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter email",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subscription is successfully added",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 64799687100,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.user_clicks_on_TVunit()"
});
formatter.result({
  "duration": 9927710700,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.close_popup()"
});
formatter.result({
  "duration": 1942226800,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.click_on_product_tv()"
});
formatter.result({
  "duration": 9698538400,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.user_navigated_to_next_page()"
});
formatter.result({
  "duration": 4874619600,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.page_is_verified()"
});
formatter.result({
  "duration": 53033200,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.user_hover_on_material_and_check_ckeckbox()"
});
formatter.result({
  "duration": 4881431800,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.verifies_correct_text()"
});
formatter.result({
  "duration": 4666459000,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.enter_email()"
});
formatter.result({
  "duration": 19053738900,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.subscription_is_successfully_added()"
});
formatter.result({
  "duration": 358614000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "duration": 504800,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.HomepageStepdefination.close_the_driver(HomepageStepdefination.java:97)\r\n\tat ✽.And close the driver(CarriersPage.feature:15)\r\n",
  "status": "failed"
});
formatter.uri("GiftCollection.feature");
formatter.feature({
  "line": 1,
  "name": "verifies gift collection",
  "description": "",
  "id": "verifies-gift-collection",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details \"\u003crecei_name\u003e\" ,\"\u003ccustomer_name\u003e\" ,\"\u003cCustmer_mail\u003e\" , \"\u003creceipnt_mail\u003e\" , \"\u003ccutomer_phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the driver",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;",
  "rows": [
    {
      "cells": [
        "recei_name",
        "customer_name",
        "Customer_mail",
        "receipnt_mail",
        "customer_phone"
      ],
      "line": 19,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;1"
    },
    {
      "cells": [
        "avni",
        "anuja",
        "avni@gmail.com",
        "monu@gmail.com",
        "8790654367"
      ],
      "line": 20,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;2"
    },
    {
      "cells": [
        "kajal",
        "mibal",
        "kajal@gmail.com",
        "rupal@gmail.com",
        "1234567890"
      ],
      "line": 21,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details \"avni\" ,\"anuja\" ,\"\u003cCustmer_mail\u003e\" , \"monu@gmail.com\" , \"\u003ccutomer_phone\u003e\"",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 79072436800,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "duration": 23230965400,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.choose_a_gift()"
});
formatter.result({
  "duration": 143772500,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.gets_the_price_of_gift()"
});
formatter.result({
  "duration": 58260500,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_enter_price()"
});
formatter.result({
  "duration": 112998700,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.insert_date_for_which_it_is_going_to_delivered()"
});
formatter.result({
  "duration": 3002226700,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.submit()"
});
formatter.result({
  "duration": 111681300,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.details_form_navigated()"
});
formatter.result({
  "duration": 33895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avni",
      "offset": 19
    },
    {
      "val": "anuja",
      "offset": 27
    },
    {
      "val": "\u003cCustmer_mail\u003e",
      "offset": 36
    },
    {
      "val": "monu@gmail.com",
      "offset": 55
    },
    {
      "val": "\u003ccutomer_phone\u003e",
      "offset": 74
    }
  ],
  "location": "GiftCollectionStepDefination.user_fill_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 2147626400,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.clicks_on_confirm()"
});
formatter.result({
  "duration": 28647100,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.filled_details_successfully()"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "duration": 264000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.HomepageStepdefination.close_the_driver(HomepageStepdefination.java:97)\r\n\tat ✽.And close the driver(GiftCollection.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details \"kajal\" ,\"mibal\" ,\"\u003cCustmer_mail\u003e\" , \"rupal@gmail.com\" , \"\u003ccutomer_phone\u003e\"",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 48596535300,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "duration": 2437242100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59805}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 42b1d380ab3dd58726b5801332a908ad\n*** Element info: {Using\u003dxpath, value\u003d//ul[@class\u003d\u0027featuredLinksBar__linkContainer\u0027]/descendant::li[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bddFrameReusable.WebDriverHelper.click(WebDriverHelper.java:26)\r\n\tat bddframePageobject.GiftCollectionPageObject.clickOnGift(GiftCollectionPageObject.java:30)\r\n\tat stepdefination.GiftCollectionStepDefination.user_hover_on_gift(GiftCollectionStepDefination.java:18)\r\n\tat ✽.When user hover on gift(GiftCollection.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.choose_a_gift()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.gets_the_price_of_gift()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_enter_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.insert_date_for_which_it_is_going_to_delivered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.details_form_navigated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "kajal",
      "offset": 19
    },
    {
      "val": "mibal",
      "offset": 28
    },
    {
      "val": "\u003cCustmer_mail\u003e",
      "offset": 37
    },
    {
      "val": "rupal@gmail.com",
      "offset": 56
    },
    {
      "val": "\u003ccutomer_phone\u003e",
      "offset": 76
    }
  ],
  "location": "GiftCollectionStepDefination.user_fill_details(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.clicks_on_confirm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.filled_details_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("HelpCenter.feature");
formatter.feature({
  "line": 1,
  "name": "verify help center page",
  "description": "",
  "id": "verify-help-center-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull verification",
  "description": "",
  "id": "verify-help-center-page;successfull-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "clicks on Help",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on the link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verifies the page by comparing \"Cancellations and Return\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 17237299100,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59847}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f546dee0d905678b1627f043c88c5dc2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdefination.HomePage3Stepdefination.user_is_on_homepage(HomePage3Stepdefination.java:36)\r\n\tat ✽.When user is on homepage(HelpCenter.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HelpCenterStepDefination.clicks_on_Help()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HelpCenterStepDefination.click_on_the_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancellations and Return",
      "offset": 32
    }
  ],
  "location": "HelpCenterStepDefination.verifies_the_page_by_comparing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("HomePage2.feature");
formatter.feature({
  "line": 1,
  "name": "Add product to cart",
  "description": "",
  "id": "add-product-to-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Succeccfull addition",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on \"study\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Laptop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigated to next page and popup closed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Add product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user get price of product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user add the details \"\u003cusername\u003e\" and \"\u003cphone\u003e\" , \"\u003cpin\u003e\" , \"\u003cfname\u003e\" , \"\u003clname\u003e\" , \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "product addedd successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the driver",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition;",
  "rows": [
    {
      "cells": [
        "username",
        "phone",
        "pin",
        "fname",
        "lname",
        "address"
      ],
      "line": 18,
      "id": "add-product-to-cart;succeccfull-addition;;1"
    },
    {
      "cells": [
        "anujashelke0499@gmail.com",
        "9527620877",
        "444108",
        "Anuja",
        "Shelke",
        "changalwadi"
      ],
      "line": 19,
      "id": "add-product-to-cart;succeccfull-addition;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Succeccfull addition",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on \"study\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Laptop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigated to next page and popup closed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Add product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user get price of product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user add the details \"anujashelke0499@gmail.com\" and \"9527620877\" , \"444108\" , \"Anuja\" , \"Shelke\" , \"changalwadi\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "product addedd successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage2StepDefination.user_is_on_homePage()"
});
formatter.result({
  "duration": 27285092000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "study",
      "offset": 15
    }
  ],
  "location": "HomePage2StepDefination.user_hover_on(String)"
});
formatter.result({
  "duration": 259022600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59876}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 63f3a2c5659cd0455bb595e5f1713a7b\n*** Element info: {Using\u003dxpath, value\u003d//li[@class\u003d\u0027topnav_item studyunit\u0027]//span[contains(text(),\u0027Study\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bddFrameReusable.WebDriverHelper.action(WebDriverHelper.java:57)\r\n\tat bddframePageobject.HomePage2.hover(HomePage2.java:33)\r\n\tat stepdefination.HomePage2StepDefination.user_hover_on(HomePage2StepDefination.java:48)\r\n\tat ✽.When user hover on \"study\"(HomePage2.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage2StepDefination.clicks_on_Laptop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.user_navigated_to_next_page_and_popup_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.user_click_on_Add_product_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.enter_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.user_get_price_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.user_clicks_on_Checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "anujashelke0499@gmail.com",
      "offset": 22
    },
    {
      "val": "9527620877",
      "offset": 54
    },
    {
      "val": "444108",
      "offset": 69
    },
    {
      "val": "Anuja",
      "offset": 80
    },
    {
      "val": "Shelke",
      "offset": 90
    },
    {
      "val": "changalwadi",
      "offset": 101
    }
  ],
  "location": "HomePage2StepDefination.user_add_the_details_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage2StepDefination.product_addedd_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("HomePage3.feature");
formatter.feature({
  "line": 1,
  "name": "Get user reponse",
  "description": "",
  "id": "get-user-reponse",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check user stories",
  "description": "",
  "id": "get-user-reponse;check-user-stories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verifies the text \"TERMS OF SHIPPING AND DELIVERY\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on stories",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "successfully got the response",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 16994859300,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59947}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 401d226c2586d93d25c04e86ff50a2ec\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdefination.HomePage3Stepdefination.user_is_on_homepage(HomePage3Stepdefination.java:36)\r\n\tat ✽.Given user is on homepage(HomePage3.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage3Stepdefination.user_click_on_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "TERMS OF SHIPPING AND DELIVERY",
      "offset": 19
    }
  ],
  "location": "HomePage3Stepdefination.verifies_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage3Stepdefination.clicks_on_stories()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePage3Stepdefination.successfully_got_the_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Application Verification",
  "description": "",
  "id": "application-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify availability product",
  "description": "",
  "id": "application-verification;verify-availability-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicked on search icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "sended the text",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user navigated to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "popup closed if any",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "text is verified",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageStepdefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 26623251300,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.user_clicked_on_search_icon()"
});
formatter.result({
  "duration": 52362348000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.id: search (tried for 50 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat bddFrameReusable.WebDriverHelper.explicitWaitOfvisibilityOfElementLocated(WebDriverHelper.java:34)\r\n\tat bddframePageobject.Homepage.clickOnSearch(Homepage.java:32)\r\n\tat stepdefination.HomepageStepdefination.user_clicked_on_search_icon(HomepageStepdefination.java:57)\r\n\tat ✽.When user clicked on search icon(Homepage.feature:5)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59962}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: de04688a81814a62cd8342f6c0875de3\n*** Element info: {Using\u003did, value\u003dsearch}\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat bddFrameReusable.WebDriverHelper.explicitWaitOfvisibilityOfElementLocated(WebDriverHelper.java:34)\r\n\tat bddframePageobject.Homepage.clickOnSearch(Homepage.java:32)\r\n\tat stepdefination.HomepageStepdefination.user_clicked_on_search_icon(HomepageStepdefination.java:57)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomepageStepdefination.sended_the_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.user_navigated_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.popup_closed_if_any()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.text_is_verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "login verification",
  "description": "",
  "id": "login-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "unsuccessfull login",
  "description": "\r\nGiven: user is on homepage",
  "id": "login-verification;unsuccessfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user hovers on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Login window popup",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enters  fill invalid email ,password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "try to click on submit with empty fields",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "displays fields are mandatory",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_hovers_on_login()"
});
formatter.result({
  "duration": 151402500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59962}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: de04688a81814a62cd8342f6c0875de3\n*** Element info: {Using\u003dxpath, value\u003d//section[@class\u003d\u0027header__topBar_sectionRight\u0027]//li[2]}\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bddFrameReusable.WebDriverHelper.action(WebDriverHelper.java:57)\r\n\tat bddframePageobject.LoginPage.hover(LoginPage.java:33)\r\n\tat stepdefination.LoginStepDefination.user_hovers_on_login(LoginStepDefination.java:25)\r\n\tat ✽.When user hovers on login(LoginPage.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.login_window_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.enters_fill_invalid_email_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.error_massage_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.try_to_click_on_submit_with_empty_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.displays_fields_are_mandatory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("ProductDetails.feature");
formatter.feature({
  "line": 1,
  "name": "get product Details",
  "description": "",
  "id": "get-product-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check details of product",
  "description": "",
  "id": "get-product-details;check-details-of-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user hover on decor text in menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on Doormat",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "closes popUp if any",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "hovers on recommended item list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user got dimension of product",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 16202431700,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.user_hover_on_decor_text_in_menu()"
});
formatter.result({
  "duration": 220727700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60002}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 226529068005146e14b26be61f4877b0\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027navigation_wrapper\u0027]/descendant::li[@class\u003d\u0027topnav_item decorunit\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat bddFrameReusable.WebDriverHelper.action(WebDriverHelper.java:57)\r\n\tat bddframePageobject.ProductDetailsPageObject.hoverOndecor(ProductDetailsPageObject.java:38)\r\n\tat stepdefination.DecorStepDefination.user_hover_on_decor_text_in_menu(DecorStepDefination.java:19)\r\n\tat ✽.When user hover on decor text in menu(ProductDetails.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DecorStepDefination.click_on_Doormat()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DecorStepDefination.closes_popUp_if_any()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DecorStepDefination.hovers_on_recommended_item_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DecorStepDefination.click_on_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DecorStepDefination.user_got_dimension_of_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("StoresPage.feature");
formatter.feature({
  "line": 1,
  "name": "check urban ladder location",
  "description": "",
  "id": "check-urban-ladder-location",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check location",
  "description": "",
  "id": "check-urban-ladder-location;check-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on stores",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "navigated to next page and check the page by verifying text",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on location",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "location page successfully verified",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 4065828700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IU9BP2Q\u0027, ip: \u0027172.31.48.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\Shree\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60036}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4255c85aeb360aa51fc0b445f828649a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdefination.HomePage3Stepdefination.user_is_on_homepage(HomePage3Stepdefination.java:36)\r\n\tat ✽.Given user is on homepage(StoresPage.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StoresStepDefination.user_click_on_stores()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StoresStepDefination.navigated_to_next_page_and_check_the_page_by_verifying_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StoresStepDefination.clicks_on_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StoresStepDefination.location_page_successfully_verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
});