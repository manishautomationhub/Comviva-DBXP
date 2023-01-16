package appiumtest;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;

public class BrowserStack {
	

		  public static String userName = "himansusekharbal_XAseW3";
		  public static String accessKey = "sSM2ey2tATiV9a1Eq9GM";

		  public static void main(String args[]) throws MalformedURLException, InterruptedException {
		    DesiredCapabilities caps = new DesiredCapabilities();

		    caps.setCapability("device", "Galaxy Tab S5e");
		    caps.setCapability("os_version", "v9.0");
		    caps.setCapability("plarformName", "Android");
		    caps.setCapability("build", "My First Build");
		    caps.setCapability("name", "Apply Loan");
		    caps.setCapability("app", "<app_url>");

		    AndroidDriver<AndroidElement> driver = new AndroidDriver<AndroidElement>(new URL("https://"+userName+":"+accessKey+"@hub-cloud.browserstack.com/wd/hub"), caps);

		    AndroidElement searchElement = (AndroidElement) new WebDriverWait(driver, 30).until(
		        ExpectedConditions.elementToBeClickable(MobileBy.AccessibilityId("Search Wikipedia")));
		    searchElement.click();
		    AndroidElement insertTextElement = (AndroidElement) new WebDriverWait(driver, 30).until(
		        ExpectedConditions.elementToBeClickable(MobileBy.id("org.wikipedia.alpha:id/search_src_text")));
		    insertTextElement.sendKeys("BrowserStack");
		    Thread.sleep(5000);

		    List<AndroidElement> allProductsName = driver.findElementsByClassName("android.widget.TextView");
		    assert(allProductsName.size() > 0);

		    // The driver.quit statement is required, otherwise the test continues to execute, leading to a timeout.
		    driver.quit();
		  }
		
}
