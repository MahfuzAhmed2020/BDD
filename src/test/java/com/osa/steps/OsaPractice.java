package com.osa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OsaPractice {

	@Given("^I am using osa url$")
	public void i_am_using_osa_url() throws Throwable {
System.out.println("osa url");
	}

	@And("^I click on forum button$")
	public void i_click_on_forum_button() throws Throwable {
System.out.println("clicking on forum button");
	}

	@And("^I enter valid email$")
	public void i_enter_valid_email() throws Throwable {
System.out.println("entering valid email");
	}

	@And("^I enter valid password$")
	public void i_enter_valid_password() throws Throwable {
System.out.println("entering valid password");
	}
	
	@When("^I click on login Button$")
	public void i_click_on_login_Button() throws Throwable {
		System.out.println("clicking on login button");
	    
	}

	@Then("^I verify the Student page$")
	public void i_verify_the_Student_page() throws Throwable {
		System.out.println("verified Student page");
	}

}
