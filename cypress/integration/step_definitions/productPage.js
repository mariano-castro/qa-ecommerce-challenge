import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../pages/cartPage';
import ProductPage from '../../pages/productPage';

Given('I am on the product page', () => {
    ProductPage.visitProductPage1();
});

When('I should see the product page content', () => {
    ProductPage.verifyProductContent();
});

Then('I should go back to products', () => {
    ProductPage.goBackToProducts();
});

Then('I should add to cart the product', () => {
    ProductPage.addToCartProduct();
    CartPage.verifyCartContent();
});

