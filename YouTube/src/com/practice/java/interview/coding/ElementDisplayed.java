package com.practice.java.interview.coding;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ElementDisplayed {

//How to check web element present or not
//	How to check web element displayed
//	HOw to check web element selected or not
	
	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "Driver//chromedriver.exe");
		
	WebDriver driver =	new ChromeDriver();
	driver.get("https://demoqa.com/automation-practice-form");
		
		driver.findElement(By.id("gender-radio-1")).click();
	}
	
	
	
	
	
	
	
}
