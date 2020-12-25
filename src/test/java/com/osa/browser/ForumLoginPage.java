package com.osa.browser;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ForumLoginPage {
	public WebDriver dr;

	public ForumLoginPage(WebDriver dr) {
		this.dr = dr;
		PageFactory.initElements(dr, this);
	}

	@FindBy(id="username")
	WebElement email;
	@FindBy(id = "password")
	WebElement password;
	@FindBy(id = "login_button")
	WebElement loginButton;

	public void textEmail() {
		email.sendKeys("hghg");
	}
	public void textEmail(String usernameoutline) {
		email.sendKeys(usernameoutline);
	}

	public void textPassword() {
		password.sendKeys("hgjgjgjg");
	}
	public void textPassword(String passwordoutline) {
		password.sendKeys(passwordoutline);
	}
	
	public void clickOnLoginButton() {
		loginButton.click();
	}

}
