package appiumtest;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CalculatorTest {
	WebDriver driver;
	AppiumDriver appDriver;
	AndroidDriver andDriver;

	public void openCalculator() throws MalformedURLException {
		DesiredCapabilities caps=new DesiredCapabilities();

	    caps.setCapability("device", "Galaxy S9+");
	    caps.setCapability("os_version", "9.0");
	    caps.setCapability("plarformName", "Android");
	    caps.setCapability("build", "My First Build");
	    caps.setCapability("name", "Apply Loan");
	    
	    URL url=new URL("");
	    appDriver=new AndroidDriver<MobileElement>(caps);
	    
	}
}
