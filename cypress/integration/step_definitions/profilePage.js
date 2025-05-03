import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProfilePage from '../../pages/profilePage';
import HomePage from '../../pages/HomePage';

Given('I am on the profile page', () => {
    ProfilePage.visitProfilePage();
});

When('I should see the personal information', () => {
    ProfilePage.verifyProfileContent();
});

Then('I should go back to home', () => {
    ProfilePage.backToHome();
    HomePage.verifyMainContent()
});

Then('I should edit name and email', () => {
    ProfilePage.editProfile();
    ProfilePage.validateChanges();
});



