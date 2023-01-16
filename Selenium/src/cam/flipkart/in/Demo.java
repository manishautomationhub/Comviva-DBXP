package cam.flipkart.in;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Demo {

	
	public static void main(String[] args) {
		
		
		System.setProperty("webdriver.chrome.driver","Driver//chromedriver.exe");
		
		WebDriver driver =new ChromeDriver();
		driver.get("https://www.flipkart.com/");
		
	}
	
	
}
