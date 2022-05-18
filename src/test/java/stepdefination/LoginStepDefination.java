package stepdefination;

import java.util.ArrayList;

import bddFrameUtility.ExcelRead;
import bddframePageobject.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefination {
	ExcelRead excel;
	LoginPage l=new LoginPage();
@When("^user hovers on login$")
public void user_hovers_on_login() throws Throwable {
	l.hover();
	
	}

@And("^clicks on Login$")
public void clicks_on_Login() throws Throwable {
	l.login();
}

@Then("^Login window popup$")
public void login_window_popup() throws Throwable {
	
}

@And("^Enters  fill invalid email ,password$")
public void enters_fill_invalid_email_password() throws Throwable {
	excel=new ExcelRead();
	ArrayList<String> data=excel.excelTest();
	l.enterEmail(data.get(0));
	l.enterPass(data.get(1));
}

@And("^clicks on submit$")
public void clicks_on_submit() throws Throwable {
	l.submit();
	Thread.sleep(2000);
}

@Then("^error massage displayed$")
public void error_massage_displayed() throws Throwable {
	l.errorGet();
	Thread.sleep(2000);
}

@And("^try to click on submit with empty fields$")
public void try_to_click_on_submit_with_empty_fields() throws Throwable {
	l.submit();
}

@Then("^displays fields are mandatory$")
public void displays_fields_are_mandatory() throws Throwable {
	l.requiredField();
}


}
