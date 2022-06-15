package steps;

import java.io.IOException;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.DatabasePage;
import pages.LoginPage;
import pages.TestBase;

	

public class LoginStepDef extends TestBase {

	LoginPage loginPage;
	DatabasePage databasepage;
	
	@Before
	public void beforerun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		databasepage =new DatabasePage();
	}
	
	//Given User is on the Techfios login page 
	@Given ("^User is on the Techfios login page$") 
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
	}
	
	//When User enters username as "demo@techfios.com" 
	@When ("^User enters username as \"([^\"]*)\"$") 
	public void user_enters_username_as(String username) throws Exception {
		loginPage.enterUserName(username);
		Thread.sleep(3000);
	}
			
	@When("^User enters passward as \"([^\"]*)\"$")
	public void user_enters_passward_as(String passward) throws Throwable {
	    loginPage.enterPassword(passward);
	    Thread.sleep(3000);
	    
	}

		
	//And User clicks on signin button 
	@And ("User clicks on signin button")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPage.clickSignInButton();
	    Thread.sleep(3000);

	}
	
	//Then User should land on dashboard page
	@Then ("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws InterruptedException, IOException {
		String actual	=	driver.getTitle();
		String expeted = "Dashboard- iBilling";
		Assert.assertEquals("Dashboard page not found", expeted, actual);
		takeScreenshot(driver);
		Thread.sleep(3000);
	}
	
	
	
	
	@When("^User enters \"([^\"]*)\" from techfios database$")
	public void user_enters_from_techfios_database(String data) throws Throwable {
	    
//		loginPage.enterUserName(databasepage.getData(username));
//		loginPage.enterPassword(databasepage.getData(password));
		
		switch (data) {
		
		case "username":
			
			loginPage.enterUserName(databasepage.getData(data));
			break;
		
		case "password":
			
			loginPage.enterPassword(databasepage.getData(data));
			break;
			
			default:
				System.out.println("something is wrong");
				break;
		}
					
	}
	
		
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
}
