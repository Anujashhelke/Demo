package stepdefination;

import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.relevantcodes.extentreports.ExtentTest;

import bddFrameUtility.BaseClass;
import bddFrameUtility.ExtentReport;
import bddFrameUtility.Logs;
import bddframePageobject.Footer;
import bddframePageobject.Searchpage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
public class FooterPageStepDefination {
	public static ExtentReport extent=new ExtentReport();
	public static ExtentTest test;
	WebDriver driver;
	Logs logger;
	Logger log;
	Footer f=new Footer();

	    @When("^user click on Floss in footer$")
	    public void user_click_on_floss_in_footer() throws Throwable {
	        f.clickOnLink();
	        extent.logFail("clicked fail");
	    }

	    @Then("^next page populated$")
	    public void next_page_populated() throws Throwable {
	        f.getTitle();

	    }

	    @And("^text FLOSS PICKS verified$")
	    public void text_floss_picks_verified() throws Throwable {
	        f.verifyText();
	      //  extent.endReport();
	      //SS BaseClass.close();
	    }

	}


