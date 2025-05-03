import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../pages/cartPage';
import HomePage from '../../pages/HomePage';

Given('I am on the cart page', () => {
    CartPage.visitCart();
});

When('I should see the cart content', () => {
    CartPage.verifyCartContent();
});

Then('I should continue shopping', () => {
    CartPage.clickContinueShopping();
    HomePage.verifyMainContent()
});
