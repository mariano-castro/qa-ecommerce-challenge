Feature: Product Page Navigation

  Scenario: User can navigate to the product page
    Given I am on the product page
    When I should see the product page content
    Then I should go back to products

  Scenario: User can add a product to the cart
    Given I am on the product page
    When I should see the product page content
    Then I should add to cart the product
