package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.testng.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features={"C:\\Users\\Shree\\eclipse-workspace\\CucumberFramework\\Feature"},
		glue={"stepdefination"},
	 
		plugin={"pretty","html:reports/rp.html"},
		monochrome=true,
		dryRun=true)
public class TestRunner {
	//ExtentReport extent=new ExtentRepot();
	
}
	
