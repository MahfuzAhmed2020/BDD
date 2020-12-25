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
  "duration": 11952056900,
  "status": "passed"
});
formatter.match({
  "location": "Example.i_click_on_forum_button()"
});
formatter.result({
  "duration": 20169654900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"forum.html\" class\u003d\"nav-link\"\u003e...\u003c/a\u003e is not clickable at point (653, 222). Other element would receive the click: \u003cdiv id\u003d\"ftco-loader\" class\u003d\"fullscreen\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAHFUZ\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\mahfu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63694}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1121f82756ad4200fc67f5f8c7ba9ed3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.osa.steps.Example.i_click_on_forum_button(Example.java:39)\r\n\tat ✽.And I click in forum button(Example.feature:6)\r\n",
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