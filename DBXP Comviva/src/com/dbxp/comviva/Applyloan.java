package com.dbxp.comviva;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

public class Applyloan {

	private WebDriver driver;

	@FindBy (xpath = "//input[@id='account_email']")
	private WebElement email;

	@FindBy (xpath = "//button[@name='commit']")
	private WebElement continueBtn;

	@FindBy (id="account_password")
	private WebElement account_password;

	@FindBy (name="commit")
	private WebElement login;

	@FindBy (xpath= "//span[text()='Products']")
	private WebElement clickonProductsBtn;

	@FindBy (xpath= "//span[text()='Add product']")
	private WebElement clickOnAddProductSection;

	@FindBy (xpath = "//input[@id='PolarisTextField4']")
	private WebElement title;

	@FindBy(id="tinymce")
	private WebElement dicription;

	@FindBy(id= "product-description_ifr")
	private WebElement frame;

	@FindBy(xpath="(//button[@class='Polaris-Button_r99lw Polaris-Button--primary_7k9zs' and @type='button'])[1]")
	private WebElement clickOnSaveBTN;

	@Test (priority = 1)
	public  void launchspocify(){
	System.setProperty("webdriver.chrome.driver", "Driver\\chromedriver.exe");
	driver= new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	driver.get("https://ced-selenium-test.myshopify.com/admin");
	PageFactory.initElements(driver, this);
	}

	@Test (priority = 2)
	public void loginSpocify() throws InterruptedException {
	Thread.sleep(5000);
	email.sendKeys("chiraggupta@cedcommerce.com");
	Thread.sleep(10000);
	WebDriverWait  webDriverWait= new WebDriverWait(driver,800);
	webDriverWait.until(ExpectedConditions.elementToBeClickable(continueBtn));
	continueBtn.click();
	webDriverWait.until(ExpectedConditions.elementToBeClickable(account_password));
	account_password.sendKeys("SeleniumTest");
	webDriverWait.until(ExpectedConditions.elementToBeClickable(login));
	login.click();
	}

	@Test (priority = 3)
	public void gotoProductSectionAndFillup() throws InterruptedException {
	clickonProductsBtn.click();
	clickOnAddProductSection.click();
	title.sendKeys("ecommerce");
	driver.switchTo().frame(frame);
	dicription.sendKeys("input discription field");
//	WebDriverWait  webDriverWait= new WebDriverWait(driver,800);
//	webDriverWait.until(ExpectedConditions.elementToBeClickable(clickOnSaveBTN));
	driver.switchTo().defaultContent();
	JavascriptExecutor jse = (JavascriptExecutor) driver;
	jse.executeScript("arguments[0].click()",clickOnSaveBTN);
	System.out.println("Element is clicked by javascript ");
	System.out.println("User click successfully on the save button");

	}
	
	
}
