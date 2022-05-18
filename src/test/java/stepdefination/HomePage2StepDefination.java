package stepdefination;

import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import bddFrameUtility.BaseClass;
import bddFrameUtility.ConfigRead;
import bddFrameUtility.ExtentReport;
import bddFrameUtility.Logs;
import bddframePageobject.HomePage2;
import bddframePageobject.HomePage3;
import bddframePageobject.Homepage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class HomePage2StepDefination {
	public static ExtentReport extent;
	WebDriver driver;
	Logs logger;
	Logger log;
	HomePage2 h=new HomePage2();
	ConfigRead read;
  
	
	@Given("^User is on homePage$")
	public void user_is_on_homePage() throws Throwable {
		extent=new ExtentReport();
		read=new ConfigRead();
		
			// TODO Auto-generated catch bloc
		  //extent. createReport();
		    driver=BaseClass.setUp();
					driver.get(read.getUrl());
	    extent.createReport(getClass().getName());
	  extent.createTest("verify product");
	  extent.logPass("browser launched successfully");
	   
	}

	@When("^user hover on \"([^\"]*)\"$")
	public void user_hover_on(String arg1) throws Throwable {
		h.hover();
		Thread.sleep(3000);
		
		
		
		
		
		
		
	   
	}

	@When("^clicks on Laptop$")
	public void clicks_on_Laptop() throws Throwable {
		h.clickOnLaptop();
	 
	}

	@Then("^user navigated to next page and popup closed$")
	public void user_navigated_to_next_page_and_popup_closed() throws Throwable {
		h.closePopup();
	}

	@Then("^user click on Add product to cart$")
	public void user_click_on_Add_product_to_cart() throws Throwable {
		h.hoverOnProduct();
		h.clickOnAdd();
	   
	}

	@Then("^enter quantity$")
	public void enter_quantity() throws Throwable {
		h.addToCart();
		h.quantity();
	}

	@Then("^user get price of product$")
	public void user_get_price_of_product() throws Throwable {
		h.Price();
	}

	@Then("^user clicks on Checkout$")
	public void user_clicks_on_Checkout() throws Throwable {
		h.checkout();
	}

	@Then("^user add the details \"([^\"]*)\" and \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
	public void user_add_the_details_and(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
		h.enterUsername(arg1);
		h.enterphone(arg2);
		h.enterPin(arg3);
		h.enterFname(arg4);
		h.enterLname(arg5);
		h.enteraddress(arg6);
	}

	@Then("^product addedd successfully$")
	public void product_addedd_successfully() throws Throwable {
	  
	}
}

