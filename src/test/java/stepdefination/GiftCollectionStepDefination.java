package stepdefination;

import org.junit.runner.RunWith;

import bddframePageobject.GiftCollectionPageObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
public class GiftCollectionStepDefination {
	
	GiftCollectionPageObject gift=new GiftCollectionPageObject();
@When("^user hover on gift$")
public void user_hover_on_gift() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	gift.clickOnGift();
	gift.hover();
	
	
	
	
	
	
	
}

@When("^Choose a gift$")
public void choose_a_gift() throws Throwable {
	gift.clickOnChoose();
}

@Then("^gets the price of gift$")
public void gets_the_price_of_gift() throws Throwable {
	gift.getText();
}

@Then("^user enter price$")
public void user_enter_price() throws Throwable {
	gift.insertAccount();
}

@Then("^insert date for which it is going to delivered$")
public void insert_date_for_which_it_is_going_to_delivered() throws Throwable {
	gift.insertDate();
}

@Then("^submit$")
public void submit() throws Throwable {
	gift.clickNext();
}

@Then("^details form navigated$")
public void details_form_navigated() throws Throwable {
	gift.getTitle();
}

@Then("^user fill details \"([^\"]*)\" ,\"([^\"]*)\" ,\"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
public void user_fill_details(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
	gift.sendText(arg1,arg2,arg3,arg4,arg5);
}

@Then("^clicks on confirm$")
public void clicks_on_confirm() throws Throwable {
	gift.clickConfirm();
}

@Then("^filled details successfully$")
public void filled_details_successfully() throws Throwable {
	System.out.println("successfull");
   
}


}
