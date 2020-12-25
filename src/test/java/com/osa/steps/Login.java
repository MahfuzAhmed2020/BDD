package com.osa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	@Given("^I am on osa home page$")
	public void i_am_on_osa_home_page(){
		System.out.println("I'm running OSA login feature file from the feature file ");
	}
	@And("^I enter username$")
	public void i_enter_username() {}
	@And("^I enter password$")
	public void i_enter_password() {}
	@When("^I click on login button$")
	public void i_click_on_login_button() {
		System.out.println("Clicking on login button");
	}
	@Then("^I verify the user$")
	public void i_verify_the_user() {
		System.out.println("Verification complete");
	}
	@And("^I enter invalid username$")
	public void i_enter_invalid_username() {
		System.out.println("Verification complete");
	}
	


		@Given("^I am on osa home page \"([^\"]*)\"$")
		public void i_am_on_osa_home_page(String arg1) throws Throwable {
		   
		}

		@Given("^I enter my  username \"([^\"]*)\"$")
		public void i_enter_my_username(String arg1) throws Throwable {
		   
		}

	@When("^I click on osa login button$")
	public void i_click_on_osa_login_button() throws Throwable {
	   
	}

	@Then("^I verify the user account$")
	public void i_verify_the_user_account() throws Throwable {

	}

}
