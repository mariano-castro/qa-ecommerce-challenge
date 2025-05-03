import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

When('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

When('I search for a product {string}', (product) => {
    HomePage.searchProduct(product);
});

Then('I should see the product {string}', (product) => {
    HomePage.validateProduct(product);
});

Then('I should see no products validation', () => {
    HomePage.validateNotProducts();
});