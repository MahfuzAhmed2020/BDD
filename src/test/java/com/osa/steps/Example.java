package com.osa.steps;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.osa.browser.AppContains;
import com.osa.browser.Browser;
import com.osa.browser.ForumLoginPage;
import com.osa.browser.Homepage;
import com.osa.browser.Utilities;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Example {
	public WebDriver dr;
	Homepage h;
	ForumLoginPage fl;
	private static Logger log = Utilities.getLog(Example.class);

//  Given I enter the osa url "https://osaconsultingtech.com/"
	@Given("^I enter the osa url \"([^\"]*)\"$")

	public void i_enter_the_osa_url(String url) {
		log.info("opening browser with chrome");
		dr = Browser.openBrowser(AppContains.BROWSER);
		log.info("opening osa");
		dr.get(url);

		h = new Homepage(dr);
	}

	@And("^I click in forum button$")
	public void i_click_on_forum_button() throws InterruptedException {
//		Thread.sleep(5000);
//		//Thread.sleep(7000);	
//		//dr.findElement(By.xpath("//a[contains(text(),'Forum')]")).click();;
		Thread.sleep(2000);

		h.clickOnForumButton();
		log.info("clicking on forum button");
	}

	@Given("^I enter the username$")
	public void i_enter_the_username() throws Throwable {
		log.info("entering email");
		Thread.sleep(2000);

		// dr.findElement(By.id("username")).sendKeys("mahfuz23@gmail.com");
		fl = new ForumLoginPage(dr);
		fl.textEmail();
	}

	@And("^I enter the invalid username \"([^\"]*)\"$")
	public void i_enter_the_invalid_username(String usernameoutline) throws Throwable {
		Thread.sleep(2000);
		fl.textEmail(usernameoutline);

	}

	@And("^I enter the invalid password \"([^\"]*)\"$")
	public void i_enter_the_invalid_password(String passwordoutline) throws Throwable {
		Thread.sleep(2000);
		fl.textPassword(passwordoutline);

	}

	@When("^I enter the password$")
	public void i_enter_the_password() throws Throwable {
		Thread.sleep(2000);
		log.info("entering password");
		// Thread.sleep(10000);
		// dr.findElement(By.id("password")).sendKeys("AbrarMahfuz1");
		fl.textPassword();
	}

	@Then("^verify the student page$")
	public void verify_the_student_page() throws Throwable {
		// Thread.sleep(10000);
		log.info("page verification");
		// dr.findElement(By.id("login_button")).click();
		fl.clickOnLoginButton();
		Thread.sleep(5000);
		Assert.assertEquals("awesome", "1", "1");
		dr.close();

	}
	@When("^I click on InterviewQuestiions$")
	public void i_click_on_InterviewQuestiions() throws Throwable {
	    
	}

}
