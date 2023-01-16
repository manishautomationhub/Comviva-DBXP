package com.practice.java.interview.coding;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Locaters {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
		WebDriver driver =new ChromeDriver();
		
		driver.get("https://www.mycarhelpline.com/");
		WebElement dropDown =driver.findElement(By.name("brand"));
		Select sel = new Select(dropDown);
		sel.selectByValue("1");
		
	}
	
	
}




