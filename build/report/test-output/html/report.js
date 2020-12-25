$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example.feature");
formatter.feature({
  "line": 2,
  "name": "osa forum login as a students",
  "description": "",
  "id": "osa-forum-login-as-a-students",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As an osa student I should be able to login with username and password",
  "description": "",
  "id": "osa-forum-login-as-a-students;as-an-osa-student-i-should-be-able-to-login-with-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Example"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I enter the osa url \"https://osaconsultingtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click in forum button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the student page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://osaconsultingtech.com/",
      "offset": 21
    }
  ],
  "location": "Example.i_enter_the_osa_url(String)"
});
formatter.result({
  "duration": 10111236100,
  "status": "passed"
});
formatter.match({
  "location": "Example.i_click_on_forum_button()"
});
formatter.result({
  "duration": 4858335200,
  "status": "passed"
});
formatter.match({
  "location": "Example.i_enter_the_username()"
});
formatter.result({
  "duration": 19866382600,
  "status": "passed"
});
formatter.match({
  "location": "Example.i_enter_the_password()"
});
formatter.result({
  "duration": 4089010800,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_login_button()"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "Example.verify_the_student_page()"
});
formatter.result({
  "duration": 4084887300,
  "status": "passed"
});
});