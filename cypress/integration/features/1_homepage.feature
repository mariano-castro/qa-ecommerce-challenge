Feature: Homepage Navigation

  Scenario: User can navigate to the homepage
    Given I am on the homepage
    When I should see the main content
    Then I should see the full list of products

  Scenario: Valid search
    Given I am on the homepage
    When I search for a product 'Watch'
    Then I should see the product 'Watch'

  Scenario: Invalid search
    Given I am on the homepage
    When I search for a product 'asdasd'
    Then I should see no products validation
