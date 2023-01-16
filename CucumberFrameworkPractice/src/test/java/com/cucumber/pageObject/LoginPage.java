package com.cucumber.pageObject;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	private WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy (xpath = "//input[@class='_2IX_2- VJZDxU']")
	private WebElement userId;
	
	@FindBy (xpath = "//input[@class='_2IX_2- _3mctLh VJZDxU']")
	private WebElement password;
	
	@FindBy (xpath = "//div[@class='_1D1L_j']//button[@type='submit']")
	private WebElement loginBtn;
	
	public void enterEmail(String userName) {
		userId.sendKeys(userName);
	}
	
	public void enterPass(String pwd) {
		password.sendKeys(pwd);
	}
	public void clickOnLoginBtn() {
		loginBtn.click();
	}
	
}
