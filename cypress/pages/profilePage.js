class ProfilePage {
    elements = {
        profileContent: () => cy.get('[data-testid="profile-page"]'),
        backHomeButton: () => cy.get('[data-testid="back-to-home"]'),
        addToCartButton: () => cy.get('[data-testid="add-to-cart"]'),
        editProfileButton: () => cy.get('[data-testid="edit-profile"]'),
        nameEdit: () => cy.get('[data-testid="profile-name-input"]'),
        emailEdit: () => cy.get('[data-testid="profile-email-input"]'),
        saveChangesButton: () => cy.get('[data-testid="save-profile"]'),
        nameText: () => cy.get('[data-testid="profile-name"]'),
        emailText: () => cy.get('[data-testid="profile-email"]')
    }

    name = 'test qa';
    email = 'test@example.com';

    visitProfilePage() {
        cy.visit('/profile');
    }

    verifyProfileContent() {
        this.elements.profileContent().should('be.visible');
    }

    backToHome() {
        this.elements.backHomeButton().click();
    }

    editProfile() {
        this.elements.editProfileButton().click();
        this.elements.nameEdit().clear().type(this.name);
        this.elements.emailEdit().clear().type(this.email);
        this.elements.saveChangesButton().click();
    }

    validateChanges() {
        this.elements.nameText().should('have.text', this.name);
        this.elements.emailText().should('have.text', this.email)
    }
}

export default new ProfilePage();