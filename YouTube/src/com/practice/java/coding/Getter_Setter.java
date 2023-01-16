package com.practice.java.coding;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebDriver;

public class Getter_Setter {

	private WebDriver driver;
	private List array;
	private Map data;
	public void setDriver(WebDriver driver) {
		this.driver = driver;
	}
	public void setArray(List array) {
		this.array = array;
	}
	public WebDriver getDriver() {
		return driver;
	}
	public List getArray() {
		return array;
	}
	public Map getData() {
		return data;
	}
	public void setData(Map data) {
		this.data = data;
	}
	
	
	
	
}
