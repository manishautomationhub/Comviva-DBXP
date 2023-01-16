package com.practice.windowHandle;

import java.util.Set;

import org.openqa.selenium.WebDriver;

public class WindowHandle {
private WebDriver driver;
	
public WindowHandle(WebDriver driver) {
	this.driver=driver;
}
	
	public void switchToWindowsByTitle(String expTitle) {
		Set<String> window = driver.getWindowHandles();
		for (String child : window) {
			String tit = driver.getTitle();
			System.out.println(tit);
			if (!tit.equalsIgnoreCase(expTitle)) {
				System.out.println("Please Enter correct Title of the page");
			}
			driver.switchTo().window(child);
		}
	}
	public void switchToWindowsByURL() {
		Set<String> window = driver.getWindowHandles();
		System.out.println(window);
		for (String multipleWindow : window) {
			driver.switchTo().window(multipleWindow);
			String url = driver.getCurrentUrl();
			System.out.println(url);
		}
		driver.switchTo().window(driver.getWindowHandle());
	}
	public void switchToMainWindow(String mainWindow) {
		driver.switchTo().window(mainWindow);
		System.out.println(driver.getCurrentUrl());
	}
	public String getMainWindow() {
		String window = driver.getWindowHandle();
		System.out.println(driver.getTitle());
		return window;
	}
	
}
