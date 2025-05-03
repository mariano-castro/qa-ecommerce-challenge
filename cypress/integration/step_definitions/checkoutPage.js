import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CheckoutPage from '../../pages/checkoutPage';
import ProductPage from '../../pages/productPage';
import CartPage from '../../pages/cartPage';

Given('I go to checkout page', () => {
    ProductPage.visitProductPage1();
    CheckoutPage.addToCartProduct();
    CheckoutPage.proceedToCheckout();
});

When('I should see the delivery address content', () => {
    ProductPage.visitProductPage1();
    CheckoutPage.addToCartProduct();
    CheckoutPage.proceedToCheckout();
});

Then('I should go back to cart', () => {
    CheckoutPage.goBackToCart();
    CartPage.verifyCartContent();
});

When('I complete the checkout flow', () => {
    CheckoutPage.completeAddressForm();
    CheckoutPage.completePaymentForm();
});

Then('I should see thank you page', () => {
    CheckoutPage.validatePurchase();
});
