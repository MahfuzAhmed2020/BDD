package com.osa.runner;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginExample {


@Given("^I navigate to osa$")
public void i_navigate_to_osa() throws Throwable {
	System.out.println("navigating to osa");
    
}

@And("^Iclick forum login button$")
public void iclick_forum_login_button() throws Throwable {
	System.out.println("clicking on o");
}

@Given("^I entered email$")
public void i_entered_email() throws Throwable {
   
}

@And("^I entered pass$")
public void i_entered_pass() throws Throwable {
   
}

@And("^I ckick on login button$")
public void i_ckick_on_login_button() throws Throwable {
    
}

@Then("^I verify Stpage$")
public void i_verify_Stpage() throws Throwable {
    
}
}
