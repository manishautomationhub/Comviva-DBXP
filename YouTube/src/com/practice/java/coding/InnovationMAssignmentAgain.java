package com.practice.java.coding;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class InnovationMAssignmentAgain {

	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "Driver//chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.makemytrip.com/");
		Actions ac = new Actions(driver);
		driver.manage().window().maximize();
		ac.click().perform();
		driver.findElement(By.xpath("//span[text()='DEL, Delhi Airport India']")).click();
		driver.findElement(By.xpath("//input[@placeholder=\"From\"]")).sendKeys("delhi");
		driver.findElement(By.xpath("//span[text()='BLR, Bengaluru International Airport India']")).click();
		driver.findElement(By.xpath("//input[@placeholder=\"To\"]")).sendKeys("mumbai");
		driver.findElement(By.xpath("//span[text()='DEPARTURE']")).click();
		Thread.sleep(3000);
		WebElement from = driver.findElement(By.xpath("(//div[@role=\"gridcell\"]//p[text()='16'])[1]"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
//		ac.click(from).click(to).perform();
		js.executeScript("arguments[0].click();", from);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[text()='DEPARTURE']")).click();
		WebElement to = driver.findElement(By.xpath("(//div[@role=\"gridcell\"]//p[text()='16'])[2]"));
		js.executeScript("arguments[0].click();", to);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[text()='Search']")).click();
	}
}