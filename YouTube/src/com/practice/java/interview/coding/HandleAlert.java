package com.practice.java.interview.coding;

import org.openqa.selenium.By;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;

public class HandleAlert {
	
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
	WebDriver driver=	new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS)
	driver.manage().window().maximize();
		driver.get("https://demoqa.com/alerts");
		driver.findElement(By.id("alertButton")).click();
		driver.switchTo().alert().accept();
		System.out.println("Alert handle successfully");
	}
	
	
}
