package com.practice.windowHandle;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Vtiger {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
		WebDriver driver= new ChromeDriver();
		driver.get("https://demoqa.com/browser-windows");
		driver.manage().window().maximize();
		driver.findElement(By.id("windowButton")).click();
		WindowHandle handle =new WindowHandle(driver);
		String parent =handle.getMainWindow();
		handle.switchToWindowsByTitle("ToolsQA");
		System.out.println("This is child widow");
		driver.close();
		handle.switchToMainWindow(parent);
		System.out.println("Switch on the main window successfully");
		driver.findElement(By.xpath("//div[contains(text(),'Elements')]")).click();
		driver.findElement(By.id("item-0")).click();
		driver.findElement(By.id("userName")).sendKeys("Manish");
		driver.findElement(By.id("userEmail")).sendKeys("manish.1234@gmail.com");
		driver.findElement(By.id("currentAddress")).sendKeys("Chal hat hava aane de abhi mind garam hai UP (221406)");
		driver.findElement(By.id("permanentAddress")).sendKeys("Kal Bataunga abhi time nahi hai samjha chutiye chal hat");
		driver.findElement(By.id("submit")).click();
	}
	
	
	
}
