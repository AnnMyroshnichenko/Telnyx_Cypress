import ContactUsPage from '../pages/ContactUsPage';
import navigation from '../fixtures/navigation.json';
import data from '../fixtures/contactData.json';

describe('Contact Form', () => {

  beforeEach(() => {
    cy.visit(navigation.contactFormUrl);
  });

  it('TC-009 Verify Contact Form Validation with Empty Fields', () => {

    ContactUsPage.elements.contactForm().should('be.visible');
    ContactUsPage.submit();
    cy.location('pathname').should('eq', navigation.contactFormUrl);
    ContactUsPage.elements.reasonSelect().should('have.attr', 'aria-invalid', 'true');
    ContactUsPage.elements.reasonSelectError().should('be.visible').and('contain', data.requiredFieldMessage);
  });

  it('TC-010 Verify Business Email Field Validation in the Contact Form', () => {

    ContactUsPage.selectReason(data.support);
    ContactUsPage.typeFirstName(data.firstName);
    ContactUsPage.typeLastName(data.lastName);
    ContactUsPage.typeBusinessEmail(data.invalidEmail);
    ContactUsPage.elements.businessEmailInput().should('have.value', data.invalidEmail);
    ContactUsPage.submit();
    ContactUsPage.elements.businessEmailInput().should('have.attr', 'aria-invalid', 'true');
    ContactUsPage.elements.emailError().should('be.visible').and('contain', data.emailValidationMessage);
  });
});