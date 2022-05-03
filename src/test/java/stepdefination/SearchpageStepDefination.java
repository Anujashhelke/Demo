package stepdefination;

import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.relevantcodes.extentreports.ExtentTest;

import bddFrameUtility.BaseClass;
import bddFrameUtility.ExtentReport;
import bddFrameUtility.Logs;
import bddframePageobject.Searchpage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;
@RunWith(Cucumber.class)
public class SearchpageStepDefination {
	
		public static ExtentReport extent=new ExtentReport();
		public static ExtentTest test;
		WebDriver driver;
		Logs logger;
		Logger log;
		Searchpage h=new Searchpage();

		@When("^user click on search$")
		public void user_click_on_search() {
			 h.search();
			 extent.logPass("clicked on search successfully");
			   
		}
		@And("enter the {string}")
		public void enter_the(String string) {
		   h.enterProduct(string);
		   extent.logPass("product entered successfully");
		}
		@And("^click on search icon$")
		public void click_on_search_icon() {
		  h.clickOnSearch();
		  extent.logPass("successful");
		  
		}
		@And("^click on resultant product$")
		public void click_on_resultant_product() throws InterruptedException {
			h.clickOnNext();
		  h.clickOnProduct();
		}
	

		@Then("product {string} displayed on product details page")
		public void product_displayed_on_product_details_page(String string) {
		    // Write code here that turns the phrase above into concrete actions
		   h.verifyText(string);
		  // extent.endReport();
		  // BaseClass.close();
		}



	



}
