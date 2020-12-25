package com.osa.browser;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage {
	public WebDriver dr;

	public Homepage(WebDriver dr) {
		this.dr = dr;
		PageFactory.initElements(dr, this);
	}
	//@FindBy(xpath=("//a[text()='Forum']"))WebElement forumButton;
	

	@FindBy(xpath ="//a[contains(text(),'Forum')]")
	WebElement forumButton;
	

	public ForumLoginPage clickOnForumButton() {
		 forumButton.click();
		 return new ForumLoginPage(dr);
	}
	

}
