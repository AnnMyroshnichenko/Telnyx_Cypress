class ContactUsPage {

  elements = {
    contactForm: () => cy.get('form'),
    reasonSelect: () => cy.get('select[name="Reason_for_Contact__c"]'),
    firstNameInput: () => cy.get('input[name="FirstName"]'),
    lastNameInput: () => cy.get('input[name="LastName"]'),
    businessEmailInput: () => cy.get('input[type="email"]'),
    websiteInput: () => cy.get('input[name="Website"]'),
    submitButton: () => cy.contains('button', /^Submit$/i),
    reasonSelectError: () => cy.contains('This field is required'),
    emailError: () => cy.get('input[type="email"]').parent().find('[role="alert"], p, span'),
  };

  selectReason(reason) {
    this.elements.reasonSelect().select(reason);
  }

  typeFirstName(name) {
    this.elements.firstNameInput().clear().type(name);
  }

  typeLastName(name) {
    this.elements.lastNameInput().clear().type(name);
  }

  typeBusinessEmail(email) {
    this.elements.businessEmailInput().clear().type(email);
  }

  submit() {
    this.elements.submitButton().click();
  }
}

export default new ContactUsPage();