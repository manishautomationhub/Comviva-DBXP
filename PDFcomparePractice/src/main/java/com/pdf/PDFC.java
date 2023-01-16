package com.pdf;

import java.io.IOException;
import org.testng.annotations.Test;

import com.testautomationguru.utility.PDFUtil;

public class PDFC {

	String expFile="C://Users//manish.prajapati//Downloads//Appointment Letter - Manish Kumar Prajapati - 1665 - 21 Feb 2022.pdf";
//	String expFile="C://Users//manish.prajapati//Downloads//Manish _Prajapati_Payslip_February_2022.pdf";
	String actFile="C://Users//manish.prajapati//Downloads//Manish _Prajapati_Payslip_February_2022.pdf";
	
	PDFUtil pdfUtil =new PDFUtil();
	
	
	@Test
	public void comparePDF() {
		
		try {
			boolean isSample = pdfUtil.compare(expFile, actFile);
			if(isSample==true) {
				System.out.println("Both PDF file is same");
			}else
			{
				System.out.println("Both PDF file is not same");
			}
			
			
		} catch (IOException e) {
		System.out.println(e.getMessage());
		}
		
	}
	
	
	
}
