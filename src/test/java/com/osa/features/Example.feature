Feature: osa forum login as a student

# Background: Given I enter the osa url "https://osaconsultingtech.com/"

  @ExampleValid @Example
  Scenario: As an osa student I should be able to login with valid username and valid password
    Given I enter the osa url "https://osaconsultingtech.com/"
    And I click in forum button
    And I enter the username
    And I enter the password
    When I click on login button
    Then verify the student page
   # When I click on InterviewQuestiions
    
 @Example @invalidExample
    Scenario Outline:  As a user I should not be able to login with invalid username and invalid password
   # Given I enter the osa url "https://osaconsultingtech.com/"
    And I click in forum button
    And I enter the invalid username <username>
    And I enter the invalid password <password>
    When I click on login button
    Then verify the student page
    Examples: 
    |username|password| 
    |"fhfhfh"|"hgfhggd+gjg"|
    |"hgjg"|"ghhfhf"|