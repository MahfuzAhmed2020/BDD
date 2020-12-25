Feature: I want to use this template

  Scenario: As a registeted user I should be able to use my username and password
    Given I navigate to osa
    And Iclick forum login button
    And I entered email
    And I entered pass
    When I ckick on login button
    Then I verify Stpage
