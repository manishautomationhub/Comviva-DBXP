package com.practice.java.coding;

import org.openqa.selenium.WebDriver;

public class ConstructorPractice {

//	 What is the constructor
//	How to create constructor
//	How to overload constructor
//	How To call constructor

	String name;
	String manish;
	String dob;
	String address;
	
	
	public ConstructorPractice(String name) {
		this.name=name;
	}

	public ConstructorPractice() {
	
	}
	public ConstructorPractice(int name) {
	
	}
	public ConstructorPractice(boolean name) {
		
	}
	public void practice() {
		String word ="I am indian";
	
		
		ConstructorPractice ca=	new ConstructorPractice(word);
		
		
	}
	
	
}
