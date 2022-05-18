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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_carriers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_ApplyNow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyNowStepDefination.click_on_ApplyNow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyNowStepDefination.application_page_verified()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.user_clicks_on_TVunit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.close_popup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.click_on_product_tv()"
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
  "location": "CarriersStepdefination.page_is_verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.user_hover_on_material_and_check_ckeckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.verifies_correct_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.enter_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CarriersStepdefination.subscription_is_successfully_added()"
});
formatter.result({
  "status": "skipped"
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
formatter.examples({
  "line": 17,
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
      "line": 18,
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
      "line": 19,
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
      "line": 20,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "status": "skipped"
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
formatter.scenario({
  "line": 20,
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
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
formatter.examples({
  "line": 16,
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
      "line": 17,
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
      "line": 18,
      "id": "add-product-to-cart;succeccfull-addition;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
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
formatter.match({
  "location": "HomePage2StepDefination.user_is_on_homePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "HomepageStepdefination.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageStepdefination.user_clicked_on_search_icon()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "LoginStepDefination.user_hovers_on_login()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DecorStepDefination.user_hover_on_decor_text_in_menu()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
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
});