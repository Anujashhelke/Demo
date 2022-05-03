package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"C:\\Users\\Shree\\eclipse-workspace\\Cucumber\\Feature"},
		glue={"stepdefination", "hooks"},
		plugin={"pretty"},
		monochrome=true,
		dryRun=false)
public class TestRunner extends AbstractTestNGCucumberTests {

}
	
