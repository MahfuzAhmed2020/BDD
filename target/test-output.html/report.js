$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Example.feature");
formatter.feature({
  "line": 1,
  "name": "osa forum login as a student",
  "description": "",
  "id": "osa-forum-login-as-a-student",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Background: Given I enter the osa url \"https://osaconsultingtech.com/\""
    }
  ],
  "line": 6,
  "name": "As an osa student I should be able to login with valid username and valid password",
  "description": "",
  "id": "osa-forum-login-as-a-student;as-an-osa-student-i-should-be-able-to-login-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@ExampleValid"
    },
    {
      "line": 5,
      "name": "@Example"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I enter the osa url \"https://osaconsultingtech.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click in forum button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
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
  "duration": 11906871400,
  "status": "passed"
});
formatter.match({
  "location": "Example.i_click_on_forum_button()"
});
formatter.result({
  "duration": 2016258400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAHFUZ\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mahfu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49928}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 75fe9f1b1c81c400db5e7bc35cf79f8e\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Forum\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.osa.browser.Homepage.clickOnForumButton(Homepage.java:23)\r\n\tat com.osa.steps.Example.i_click_on_forum_button(Example.java:44)\r\n\tat ✽.And I click in forum button(Example.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Example.i_enter_the_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Example.i_enter_the_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Example.verify_the_student_page()"
});
formatter.result({
  "status": "skipped"
});
});