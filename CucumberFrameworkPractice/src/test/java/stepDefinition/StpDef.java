package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cucumber.pageObject.LoginPage;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class StpDef {

	private WebDriver driver;
	private LoginPage loginPg;
	
	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
		driver =new ChromeDriver();
		loginPg=new LoginPage(driver);
	}

	@When("User open URL {string}")
	public void user_open_url(String url) {
		driver.get(url);
	}

	@When("User enter userId {string} and password as {string}")
	public void user_enter_user_id_and_password_as(String userId, String password) {
		loginPg.enterEmail(userId);
		loginPg.enterPass(password);
	}

	@When("Click on the Login")
	public void click_on_the_login() {
		loginPg.clickOnLoginBtn();
	}

	@Then("Page title should be {string}")
	public void page_title_should_be(String expTitle) {
 String actTitle =driver.getTitle();
 if(actTitle.equalsIgnoreCase(expTitle)) {
	 System.out.println("Title matched");
	 Assert.assertTrue(true);
 }
 else {
	 Assert.assertTrue(false);
 }
 
	}

	@When("User logout the page")
	public void user_logout_the_page() {

	}

	@Then("Close browser")
	public void close_browser() {
		driver.close();
		driver.quit();

	}

}
