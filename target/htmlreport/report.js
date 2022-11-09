$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Ibmfeature.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create a New User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on Sign in",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cfirstname\u003e\" firstname, \"\u003clastname\u003e\" lastname , \"\u003ce-mail\u003e\" email, \"\u003cusername\u003e\" username , \"\u003cpass\u003e\" pass and \"\u003cconfirmpass\u003e\" confirmpass following datas",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks register button",
  "keyword": "And "
});
formatter.step({
  "name": "user is created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "e-mail",
        "username",
        "pass",
        "confirmpass"
      ]
    },
    {
      "cells": [
        "test1",
        "test1",
        "test@test.com",
        "testindhu",
        "test",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a New User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_click_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"test1\" firstname, \"test1\" lastname , \"test@test.com\" email, \"testindhu\" username , \"test\" pass and \"test\" confirmpass following datas",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_enters_firstname_lastname_email_username_pass_and_confirmpass_following_datas(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is created",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_is_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Inbox button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on compose email",
  "keyword": "And "
});
formatter.step({
  "name": "user user enters email datas",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on send message button",
  "keyword": "And "
});
formatter.step({
  "name": "Email is sent successfully",
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
        "password"
      ]
    },
    {
      "cells": [
        "testindhu",
        "test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login User",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"testindhu\" username and \"test\" password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Inbox button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_click_on_Inbox_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on compose email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_click_on_compose_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user user enters email datas",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_user_enters_email_datas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on send message button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.user_clicks_on_send_message_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email is sent successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.email_is_sent_successfully()"
});
formatter.result({
  "status": "passed"
});
});