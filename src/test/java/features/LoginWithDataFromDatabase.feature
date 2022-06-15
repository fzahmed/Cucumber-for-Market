 @DbFeature
Feature: Login to techfios login page with data extracted from the  database


@DbScenario
Scenario:  User should be able to login with valid credentials 

	Given User is on the Techfios login page 
	When User enters "username" from techfios database 
	When User enters "password" from techfios database 
	And User clicks on signin button 
	Then User should land on dashboard page 