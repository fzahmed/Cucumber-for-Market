@otherlogin
Feature: Other TechFios login functionality validation 

@Scenario @smoke 
Scenario Outline: User should be able to login with valid credentials 

	Given User is on the Techfios login page 
	When User enters username as "<username>" 
	When User enters passward as "<passward>" 
	And User clicks on signin button 
	Then User should land on dashboard page 
	
	Examples:
	| username | passward|
	| demo@techfios.com | abc123 |
	| demo2@techfios.com | abc123 |
	| demo@techfios.com | abc1234 |
	| demo2@techfios.com | abc1234 |
	
	
	
	
	
#@Scenario2 
#Scenario: User should not be able to login with invalid password 
#
#	Given User is on the Techfios login page 
#	When User enters username as "demo@techfios.com" 
#	When User enters passward as "abc1234" 
#	And User clicks on signin button 
#	Then User should land on dashboard page 
#@Scenario3 @smoke 
#Scenario: User should not be able to login with invalid username 
#
#	Given User is on the Techfios login page 
#	When User enters username as "demo2@techfios1.com" 
#	When User enters passward as "abc123" 
#	And User clicks on signin button 
#	Then User should land on dashboard page 
#	
#	@Scenario4 @smoke 
#Scenario: User should not be able to login with invalid username and passward
#
#	Given User is on the Techfios login page 
#	When User enters username as "demo2@techfios1.com" 
#	When User enters passward as "abc1234" 
#	And User clicks on signin button 
#	Then User should land on dashboard page 