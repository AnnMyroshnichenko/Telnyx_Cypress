import contactUsPage from '../pages/ContactUsPage';
import navigation from '../fixtures/navigation.json';
import validationMessages from '../fixtures/validationMessages.json';
import { faker } from '@faker-js/faker';

describe('Contact Form', () => {

  beforeEach(() => {
    cy.visit(navigation.contactFormUrl);
  });

  it('TC-009 Verify Contact Form Validation with Empty Fields', () => {
    contactUsPage.elements.contactForm().should('be.visible');
    contactUsPage.submit();
    cy.location('pathname').should('eq', navigation.contactFormUrl);
    contactUsPage.elements.reasonSelect().should('have.attr', 'aria-invalid', 'true');
    contactUsPage.elements.reasonSelectError().should('be.visible').and('contain', validationMessages.requiredFieldMessage);
  });

  it('TC-010 Verify Business Email Field Validation in the Contact Form', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const invalidEmail = `${faker.internet.username()}gmail.com`; 

    contactUsPage.selectReason('Support');
    contactUsPage.typeFirstName(firstName);
    contactUsPage.typeLastName(lastName);
    contactUsPage.typeBusinessEmail(invalidEmail);
    contactUsPage.elements.businessEmailInput().should('have.value', invalidEmail);
    contactUsPage.submit();
    contactUsPage.elements.businessEmailInput().should('have.attr', 'aria-invalid', 'true');
    contactUsPage.elements.emailError().should('be.visible').and('contain', validationMessages.emailValidationMessage);
  });
});