package stepdefination;

import org.junit.runner.RunWith;

import bddframePageobject.ApplyNowPageObject;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class ApplyNowStepDefination {
	
	ApplyNowPageObject h=new ApplyNowPageObject();

	@When("^user clicks on carriers$")
	public void user_clicks_on_carriers() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		h.clickOnCarriers();
		Thread.sleep(3000);
		
	
	}

	@And("^user clicks on ApplyNow$")
	public void user_clicks_on_ApplyNow() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		h.clickOnApply();
		Thread.sleep(3000);
		
	}

	@And("^click on ApplyNow$")
	public void click_on_ApplyNow() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		h.clickOnApply2();
		Thread.sleep(3000);
	   
	}

	@Then("^application page verified$")
	public void application_page_verified() throws Throwable {
	    System.out.println("ApplyNowStepDefination.application_page_verified()");
	    
	}
	

}
