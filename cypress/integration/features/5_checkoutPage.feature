Feature: Checkout Page Navigation

  Scenario: User can navigate to the checkout page
    Given I go to checkout page
    When I should see the delivery address content
    Then I should go back to cart

  Scenario: Checkout succesful
    Given I go to checkout page
    When I complete the checkout flow
    Then I should see thank you page