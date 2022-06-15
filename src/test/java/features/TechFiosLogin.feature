@Loginfeature
Feature: TechFios login functionality validation 

@Scenario1 @smoke
Scenario: 1 User should be able to login with valid credentials 

	Given User is on the Techfios login page 
	When User enters username as "demo@techfios.com" 
	When User enters passward as "abc123" 
	And User clicks on signin button 
	Then User should land on dashboard page 
@Scenario2	
Scenario: 2 User should not be able to login with invalid password

	Given User is on the Techfios login page 
	When User enters username as "demo@techfios.com" 
	When User enters passward as "abc124" 
	And User clicks on signin button 
	Then User should land on dashboard page 
@Scenario3	@smoke
Scenario: 3 User should not be able to login with valid username

	Given User is on the Techfios login page 
	When User enters username as "demo@techfios1.com" 
	When User enters passward as "abc123" 
	And User clicks on signin button 
	Then User should land on dashboard page 