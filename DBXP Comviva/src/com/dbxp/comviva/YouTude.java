package com.dbxp.comviva;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class YouTude {

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "Driver\\chromedriver.exe");
	WebDriver	driver= new ChromeDriver();
		driver.get("https://www.youtube.com/");
		driver.findElement(By.xpath("//input[@name=\"search_query\"]")).sendKeys("har har shambhu");
		driver.findElement(By.xpath("//button[@id=\"search-icon-legacy\"]")).click();
		Thread.sleep(5000);
		driver.findElement(By.xpath("(//ytd-shelf-renderer//a[@id=\"thumbnail\"])[1]")).click();

	}
	
	
}
