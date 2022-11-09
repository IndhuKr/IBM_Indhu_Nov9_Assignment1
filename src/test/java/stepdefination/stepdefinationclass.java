package stepdefination;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
public class stepdefinationclass {
	
	WebDriver driver;
	
	@Given("user on the homepage")
	public void user_on_the_homepage() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\0023UQ744\\Downloads\\chromedriver_win32_1\\chromedriver.exe" );
        driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/index.php");
		System.out.println("user is navigating to the learning application");
	}
	
	@And("user click on Sign in")
	public void user_click_on_Sign_in() {
		System.out.println("click on Sign in");
		//http://elearningm1.upskills.in/main/auth/inscription.php
		driver.findElement(By.partialLinkText("Sign")).click();
	}

	@When("user enters {string} firstname, {string} lastname , {string} email, {string} username , {string} pass and {string} confirmpass following datas")
	public void user_enters_firstname_lastname_email_username_pass_and_confirmpass_following_datas(String firstname, String lastname, String email, String username, String pass, String confirmpass) {
		System.out.println("Enter datas");
		driver.findElement(By.name("firstname")).sendKeys(firstname);
		driver.findElement(By.name("lastname")).sendKeys(lastname);
		driver.findElement(By.name("email")).sendKeys(email);
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("pass1")).sendKeys(pass);
		driver.findElement(By.name("pass2")).sendKeys(confirmpass);
	}

	@And("user clicks register button")
	public void user_clicks_register_button() {
		System.out.println("click on Register button");
		//http://elearningm1.upskills.in/main/auth/inscription.php
		driver.findElement(By.name("submit")).click();
	}
	
	@Then("user is created")
	public void user_is_created() {
		String regritrationSuccess = driver.getTitle();
		Assert.assertEquals("elearning - elearning - Registration",regritrationSuccess);
	}
	@When("user enter {string} username and {string} password")
	public void user_enter_username_and_password(String username, String password) {
		 driver.findElement(By.id("login")).sendKeys(username);
		    driver.findElement(By.id("password")).sendKeys(password);
		  
	}

	@And("user clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.name("submitAuth")).click();
	   
	}
	
	@And("user click on Inbox button")
	public void user_click_on_Inbox_button() {
		System.out.println("click on Inbox");
		driver.findElement(By.linkText("Inbox")).click();
	}

	@And("user click on compose email")
	public void user_click_on_compose_email() {
		System.out.println("click on compose email");
		driver.findElement(By.xpath("//img[@src='http://elearningm1.upskills.in/main/img/icons/32/new-message.png']")).click();
	}

	@When("user user enters email datas")
	public void user_user_enters_email_datas() {
		System.out.println("Enter email data");
		driver.findElement(By.className("select2-search__field")).sendKeys("tes");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.findElement(By.xpath("//li[text()='test test']")).click();
	   
		driver.findElement(By.name("title")).sendKeys("Test Email");   
	}

	@And("user clicks on send message button")
	public void user_clicks_on_send_message_button() {
		System.out.println("click send message");
		driver.findElement(By.name("compose")).click();
	}

	@Then("Email is sent successfully")
	public void email_is_sent_successfully() {
		String validation =  driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		System.out.println("Validation message : " + validation);
	
	}
}
