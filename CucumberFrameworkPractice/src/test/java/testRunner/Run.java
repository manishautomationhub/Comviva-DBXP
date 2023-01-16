package testRunner;

import io.cucumber.testng.CucumberOptions;





@CucumberOptions(
		features = ".//Features/LoginFeature.feature",
		glue = "stepDefinition",
		dryRun = false,
		monochrome = true,
		plugin = {"pretty"}
		)
public class Run {
/*This class will empty*/
}
