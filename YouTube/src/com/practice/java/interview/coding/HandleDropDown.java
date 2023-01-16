package com.practice.java.interview.coding;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class HandleDropDown {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "Driver//chromedriver.exe");
	WebDriver driver=	new ChromeDriver();
	driver.get("https://www.mycarhelpline.com/");
	WebElement dropdown =driver.findElement(By.id("brand"));
	Select sel=new Select(dropdown);
//	sel.selectByIndex(3);
//	sel.selectByValue("9");
	sel.selectByVisibleText("Hyundai");

	
		
	}
	
}
