package com.java;

public class Practice {
	
public static void main(String[] args) {
	
}

public void duplicateNumber() {
	
	int num[]= {32,43,12,54,64,3,45,76,98,3,12,1,1,4,4};

	for(int i=0;i<=num.length-1;i++) {
		for(int j=i+1;j<=num.length-1;j++) {
			if(num[i]==num[j]) {
				System.out.println(num[i]);
			}
		}	
	}
}
public void highestNumber() {
	int num[]= {32,43,12,54,64,3,45,76,98};
	int temp;
	for(int i=0;i<=num.length-1;i++) {
		for(int j=i+1;j<=num.length-1;j++) {
			if(num[i]<num[j]) {
			temp=num[i];
			num[i]=num[j];
			num[j]=temp;
		}
		}
	}
	System.out.println(num[0]);
}
public void minNumber() {
	
	int num[]= {32,43,12,54,64,3,45,76,98};
	int temp;
	for(int i=0;i<=num.length-1;i++) {
		for(int j=i+1;j<=num.length-1;j++) {
			if(num[i]>num[j]) {
			temp=num[i];
			num[i]=num[j];
			num[j]=temp;
			}
		}
		
	}
	System.out.println(num[0]);
}
public static void reverse() {
	String str="Manish kumar";
	char ch[]=str.toCharArray();
	String temp="";
	for(int i=ch.length-1; i>=0; i--) {
		temp=temp+ch[i];
	}
	System.out.println(temp);
}

public void reverse2() {
	String str="Manish kumar";
	String st[]=str.split(" ");
	String temp="";
	for(int i=st.length-1;i>=0;i--) {
	temp=temp+st[i]+" ";
	}
	System.out.println(temp);
}

}
