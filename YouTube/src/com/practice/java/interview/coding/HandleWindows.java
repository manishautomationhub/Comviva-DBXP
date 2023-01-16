package com.practice.java.interview.coding;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HandleWindows {

	public static void main(String[]args) {
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
	WebDriver driver=	new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://demoqa.com/browser-windows");
	String parent =driver.getWindowHandle();
		driver.findElement(By.id("windowButton")).click();
		switchToWindowByTitle(driver,"ToolsQA");
		String title =driver.findElement(By.id("sampleHeading")).getText();
		System.out.println("Child window title :"+title);
		System.out.println("User switch successfully on the child windows");
		driver.close();
		driver.switchTo().window(parent);
		System.out.println("user switch successfully on the parent window");
		driver.findElement(By.id("tabButton")).click();
		
	}
	
	public static Set<String> switchToWindowByTitle(WebDriver driver,String title) {
		Set<String> windows =driver.getWindowHandles();
		for(String win:windows) {
		String actualTitle = driver.getTitle();
			if(!actualTitle.equalsIgnoreCase(title)) {
				System.out.println("Please enter currect title of page");
			}
			driver.switchTo().window(win);
		}
		return windows;
		
	}
	
	
	
	
}
