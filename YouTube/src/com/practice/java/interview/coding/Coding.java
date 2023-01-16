package com.practice.java.interview.coding;

public class Coding {

	public static void main(String[] args) {
		reverseString();
	}

	public static void reverseString() {

		String name = "I love my India";
		String[] array = name.split(" ");
		for (int i = array.length - 1; i >= 0; i--) {
			System.out.print(array[i] + " ");
		}

	}
	

	
	
	

}
