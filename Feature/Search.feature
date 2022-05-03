Feature: Application search

Scenario Outline: search for product
Given user is on home page
When user click on search
And enter the "<product>"
And click on search icon
And click on resultant product
Then product "<name>" displayed on product details page
And close the driver

Examples:
| product | name |
| battery | 3D White Battery Toothbrush |