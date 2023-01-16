package com.practice.java.interview.coding;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class InputDataInAlertBox {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
		WebDriver driver=	new ChromeDriver();
		driver.manage().window().maximize();
			driver.get("https://demoqa.com/alerts");
			driver.findElement(By.id("promtButton")).click();
			driver.switchTo().alert().sendKeys("Manish");
			driver.switchTo().alert().accept();
	}
	
}
