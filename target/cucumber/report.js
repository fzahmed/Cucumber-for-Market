$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Otherlogin.feature");
formatter.feature({
  "name": "Other TechFios login functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@otherlogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters passward as \"\u003cpassward\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "passward"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ]
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc123"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc1234"
      ]
    },
    {
      "cells": [
        "demo2@techfios.com",
        "abc1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@otherlogin"
    },
    {
      "name": "@Scenario"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@otherlogin"
    },
    {
      "name": "@Scenario"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo2@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: Dashboard page not found expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDef.user_should_land_on_dashboard_page(LoginStepDef.java:66)\r\n\tat ✽.User should land on dashboard page(classpath:features/Otherlogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@otherlogin"
    },
    {
      "name": "@Scenario"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: Dashboard page not found expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDef.user_should_land_on_dashboard_page(LoginStepDef.java:66)\r\n\tat ✽.User should land on dashboard page(classpath:features/Otherlogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@otherlogin"
    },
    {
      "name": "@Scenario"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo2@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: Dashboard page not found expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDef.user_should_land_on_dashboard_page(LoginStepDef.java:66)\r\n\tat ✽.User should land on dashboard page(classpath:features/Otherlogin.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/TechFiosLogin.feature");
formatter.feature({
  "name": "TechFios login functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Loginfeature"
    }
  ]
});
formatter.scenario({
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Loginfeature"
    },
    {
      "name": "@Scenario1"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "3 User should not be able to login with valid username",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Loginfeature"
    },
    {
      "name": "@Scenario3"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios1.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters passward as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_passward_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_dashboard_page()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: Dashboard page not found expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDef.user_should_land_on_dashboard_page(LoginStepDef.java:66)\r\n\tat ✽.User should land on dashboard page(classpath:features/TechFiosLogin.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});