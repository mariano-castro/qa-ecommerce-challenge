Feature: Profile Page Navigation

  Scenario: User can navigate to the profile page
    Given I am on the profile page
    When I should see the personal information
    Then I should go back to home

  Scenario: User can edit the profile
    Given I am on the profile page
    When I should see the personal information
    Then I should edit name and email
