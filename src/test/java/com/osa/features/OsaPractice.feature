
Feature: Checking login activities and verify the osa webpage
 @osaloginPractice
Scenario: As a student of osa I should be able to login with valid username and password 
Given I am using osa url
And I click on forum button 
And I enter valid email
And I enter valid password
When I click on login Button
Then I verify the Student page 

