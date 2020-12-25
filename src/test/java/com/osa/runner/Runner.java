package com.osa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//@RunWith(Cucumber.class)
//@CucumberOptions(
//	features= {"src/test/java/com/osa/features"},
//	glue= {"com.osa.steps"},
//	tags= {"@Example"}
//,format= {"pretty","html:target/test-output.html"/*,"jason:jason_output/cucumber.jason","junit:target/junit_xml_output/cucumber.xml"*/}
//,dryRun=true
//,monochrome=true

//)
@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"./src/test/java/com/osa/features"}, 
		glue = {"com.osa.steps"}, 
		plugin = {"pretty", "json:target/cucumber-reports/cucumber.json",
	"html:target/test-output.html","junit:target/junit_xml_output/cucumber.xml" },
		tags= {"@ExampleValid"}
		//dryRun=true
		//snippets = SnippetType.CAMELCASE
		,strict=true
		)

public class Runner {

}
