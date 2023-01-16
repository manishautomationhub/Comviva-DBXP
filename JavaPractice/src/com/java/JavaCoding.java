package com.java;

public class JavaCoding {

	public static void main(String[] args) {
//	reverseAllCharecter();
	reverseCharecter();
//	reverseStringWord();
	}

	public static void reverseStringWord() {
// 	String word
		String name = "My name is Manish";
//	 Splitting the string using space
		String[] arr = name.split(" ");
//	 Using the loop for reverse the string
		for (int i = arr.length - 1; i >= 0; i--) {
			System.out.print(arr[i] + " ");
		}
	}

	public static void reverseCharecter() {
// 	String word
		String name = "I Love India";

//	 Splitting the string using space
		String[] arr = name.split(" ");
		for (String word : arr) {
			for (int i = word.length() - 1; i >= 0; i--) {
				System.out.print(word.charAt(i));
			}
		}
	}

	public static void reverseAllCharecter() {
// 	String word
		String name = "I Love India";
//	 Splitting the string using space
		char[] arr = name.toCharArray();
//	Using loop to get all the character of string
		for (int i = arr.length - 1; i >= 0; i--) {
			System.out.print(arr[i]);
		}
	}

	public static void lowestNumber() {
//	 Creating the integer Array
		int num[] = { 4, 6, 2, 67, 86, 54, 32, 12 };
		int temp;
		for (int i = 0; i <= num.length - 1; i++) {
			for (int j = i + 1; j <= num.length - 1; j++) {
				if (num[i] > num[j]) {
					temp = num[i];
					num[i] = num[j];
					num[j] = temp;
				}
			}
		}
		System.out.println(num[2]);
	}

	public static void highestNumber() {

//	 Creating the integer Array
		int num[] = { 4, 6, 2, 67, 86, 54, 32, 12 };
		int temp;
		for (int i = 0; i <= num.length - 1; i++) {
			for (int j = i + 1; j <= num.length - 1; j++) {
				if (num[i] < num[j]) {
					temp = num[i];
					num[i] = num[j];
					num[j] = temp;
				}
			}
		}
		System.out.println(num[2]);
	}

	public static void deccendingNumber() {

//	 Creating the integer Array
		int num[] = { 4, 6, 2, 67, 86, 54, 32, 12 };
		int temp;
		for (int i = 0; i <= num.length - 1; i++) {

			for (int j = i + 1; j <= num.length - 1; j++) {

				if (num[i] < num[j]) {
					temp = num[i];
					num[i] = num[j];
					num[j] = temp;
				}
			}
			System.out.println(num[i]);
		}
	}

	public static void accendingNumber() {
//	 Creating the integer Array
		int num[] = { 4, 6, 2, 67, 86, 54, 32, 12 };
		int temp;
		for (int i = 0; i <= num.length - 1; i++) {
			for (int j = i + 1; j <= num.length - 1; j++) {
				if (num[i] > num[j]) {
					temp = num[i];
					num[i] = num[j];
					num[j] = temp;
				}
			}
			System.out.println(num[i]);
		}
	}
	
	public static void duplicateNumber() {
//		 Creating the integer Array
			int num[] = { 4,2,1,4,6,12,32,54, 6, 2, 67, 86, 54, 32, 12 };
			for (int i = 0; i <= num.length - 1; i++) {
				for (int j = i + 1; j <= num.length - 1; j++) {
					if (num[i] == num[j]) {
						System.out.println(num[i]);
					}
				}
			}
	}
	
	
	
	
	

}
