package comviva.com.dbxp.verifypan;

import org.apache.xmlbeans.impl.util.Base64;
import org.testng.annotations.Test;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class TC001_POST_Request {
	
	@Test(priority = 2)
	public void verifyPan() {
		//Specify Base URL
	   RestAssured.baseURI="http://dbxpinnom.comviva.com/v1/loan";
	   
	   //Request Object
	   RequestSpecification httpRequest =RestAssured.given();
	   
	   //Response object
	 Response respose=  httpRequest.request(Method.POST,"/verify-pan");
	 
	 //Response body 
	String responseBody= respose.getBody().asString();
	System.out.println("Response body is : "+responseBody);
	
	// Status code validation
	int statusCode= respose.getStatusCode();
	System.out.println("Status code is : "+statusCode);
	
	// Status line validation
		String statusLine= respose.getStatusLine();
		System.out.println("Status line is : "+statusLine);
	
	}
	@Test(priority = 1)
	public void getAccessToken() {
		
		String url="http://dbxpinnom.comviva.com/mobiquitypay/ums/v3/user/auth/web/login";
		
		
		RequestSpecification httpResponse= RestAssured.given()
				.header("Cookie","refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp3cy1rZXktcHVibGljLTEifQ.eyJzZXJ2aWNlUmVxdWVzdElkIjoiMjQxOGFlZTItMWY2Ny00MzgyLTkyOTEtZDNmYjUyYTQ5NjZmIiwidXNlcl9uYW1lIjoiMjQxOGFlZTItMWY2Ny00MzgyLTkyOTEtZDNmYjUyYTQ5NjZmIiwiYXV0aG9yaXphdGlvblByb2ZpbGVDb2RlIjoiU3Vic0RlZmF1bHQiLCJpZGVudGlmaWVyVmFsdWUiOiJTVUJTNzc3NzI4Mjg5MCIsImlkZW50aWZpZXJUeXBlIjoiTE9HSU5JRCIsImNhdGVnb3J5Q29kZSI6IlNVQlNDUklCRVIiLCJ1c2VySWQiOiJVUy43MTY3MTY1NzU5ODc1MjE1NSIsImRldmljZUlkIjpudWxsLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiY2xpZW50X2lkIjoiQ29yZVdlYiIsInNjb3BlIjpbIkdFVF9VU0VSX0FORF9BQ0NPVU5UX0RFVEFJTFMiLCJTRUxGU0VUQVVUSEZBQ1RPUiIsIkZFVENIX1VTRVJfUVVFU1RJT04iLCJUWE5DT1JSRUNUIiwiQVRNQ0FTSE9VVCIsIkFUTUNBU0hPVVRfVjQiLCJBRE1UWE5SRUZJRCJdLCJhdGkiOiJmNDAzYzU3Ny05NjkxLTRmYTQtYWZlMC1kOTA3ZjIxODAxZjciLCJuYW1lIjoiTWFuaXNoIE1hdGhldyIsImV4cCI6MTY1ODQzNTYxNiwianRpIjoiMjg2YzMyZjktNTllYi00ODM4LWJhNzgtOWExOTA3MTc0MmRkIn0.Wiwq4oG96IXJhX6-xlTfkjwRE0YWkWvACXL-8NkVPUX16t2QWyRGaFDVsO2T09HugmyPcPfrWx2Mmi4KI732afq_0m0bQjF3QDv1h63IJfr2kqjSgY4uXuE6JEQkrkOmx3PB4-V-_yNcoIRWdnzKWzmvAW9kEqvd9mVTc8iS3vxAPB3cuD1_M7edm2bqYtYI9jB8d7jDu8JcPI71xOMZB0_Ih9_zYP1yDSEbgDvAYrZ-zbpCuNFmrrN07qU0IV_WMmo-ZyAfvZcfNmBMdaoJ0c1EQgJPXOSt81Pr4c8GdpKQBHWqkt9MtsveKFF79zpm4HOA5vwHfYgwQ73yZk3Q8w")
				.header("Cache-Control","no-cache")
				.header("Postman-Token","<calculated when request is sent>")
				.header("Content-Type","application/json")
				.header("Content-Length","<calculated when request is sent>")
				.header("Host","<calculated when request is sent>")
				.header("User-Agent","PostmanRuntime/7.29.2")
				.header("Accept","*/*")
				.header("Accept-Encoding","gzip, deflate, br")
				.header("Connection","keep-alive");
				
				
		
		Response response=  httpResponse.post(url);
		String responseBody = response.getBody().asString();
		System.out.println("Response body is : - "+responseBody);
		int responseCode = response.getStatusCode();
		System.out.println("Response code is " +responseCode);
		String responseLine= response.getStatusLine();
		System.out.println("Response line is " +responseLine);
	}
	
	
}
