Feature: Homepage Navigation

  Scenario: User can navigate to the homepage
    Given I am on the homepage
    When I should see the main content
    Then I should see the full list of products

  Scenario: Valid search
    Given I am on the homepage
    When I search for a product ''
    Then I should see the product ''

  Scenario: Invalid search
    Given I am on the homepage
    When I search for a product 'asdasd'
    Then I should see the no products validation
