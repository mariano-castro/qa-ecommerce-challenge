class CheckoutPage {
    elements = {
        productContent: () => cy.get('.product-detail-container'),
        proceedToCheckoutButton: () => cy.get('[data-testid="proceed-to-checkout"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
        addressContent: () => cy.get('[data-testid="address-page"]'),
        backToCartButton: () => cy.get('[data-testid="back-to-cart"]'),
        firstNameInput: () => cy.get('[data-testid="firstname-input"]'),
        emailInput: () => cy.get('[data-testid="email-input"]'),
        phoneInput: () => cy.get('[data-testid="phone-input"]'),
        streetAddressInput: () => cy.get('[data-testid="street-input"]'),
        cityInput: () => cy.get('[data-testid="city-input"]'),
        stateInput: () => cy.get('[data-testid="state-input"]'),
        zipCodeInput: () => cy.get('[data-testid="zipcode-input"]'),
        countryInput: () => cy.get('[data-testid="country-input"]'),
        continueToPaymentButton: () => cy.get('[data-testid="continue-to-payment"]'),
        cardHolderNameInput: () => cy.get('[data-testid="cardholder-input"]'),
        cardNumberInput: () => cy.get('[data-testid="card-number-input"]'),
        expiryDateInput: () => cy.get('[data-testid="expiry-input"]'),
        cvvInput: () => cy.get('[data-testid="cvv-input"]'),
        placeOrderButton: () => cy.get('[data-testid="complete-payment"]'),
        successContent: () => cy.get('.success-content')
    }

    visitCheckoutPageByUrl() {
        cy.visit('/checkout/address');
    }

    proceedToCheckout() {
        this.elements.proceedToCheckoutButton().click();
    }

    addToCartProduct() {
        this.elements.addToCartButton().click();
    }

    verifyAddressContent() {
        this.elements.addressContent().should('be.visible');
    }

    goBackToCart() {
        this.elements.backToCartButton().click();
    }

    completeAddressForm() {
        this.elements.firstNameInput().type('nameTest');
        this.elements.emailInput().type('example@test.com');
        this.elements.phoneInput().type('1234567890');
        this.elements.streetAddressInput().type('streetTest');
        this.elements.cityInput().type('cityTest');
        this.elements.stateInput().type('stateTest');
        this.elements.zipCodeInput().type('1234');
        this.elements.countryInput().type('countryTest');
        this.elements.continueToPaymentButton().click();
    }

    completePaymentForm() {
        this.elements.cardHolderNameInput().type('cardHolderTest');
        this.elements.cardNumberInput().type('1234567812345678');
        this.elements.expiryDateInput().type('1231');
        this.elements.cvvInput().type('123');
        this.elements.placeOrderButton().click();
    }

    validatePurchase() {
        this.elements.successContent().should('be.visible');
    }
}

export default new CheckoutPage();