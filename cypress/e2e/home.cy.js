import homePage from '../pages/HomePage';
import contactUsPage from '../pages/ContactUsPage';
import voiceAIAgentsPage from '../pages/VoiceAIAgentsPage';
import navigation from '../fixtures/navigation.json';
import sections from '../fixtures/sections.json';

describe('Homepage', () => {

  beforeEach(() => {
    cy.visit(navigation.homeUrl);
  });

  it('TC-002 Verify "Explore the Stack" CTA Navigation', () => {
    homePage.elements.exploreStackButton().should('be.visible').and('not.be.disabled').click();
    cy.location('hash').should('eq', navigation.exploreStackSectionUrl);
    homePage.elements.stackSection().should('contain.text', sections.stack.stackSectionHeading).and('be.visible');
  });


  it('TC-003 Verify "Talk to an Expert" CTA Navigation', () => {
    homePage.elements.talkToExpertButton().should('be.visible').and('not.be.disabled').click();
    contactUsPage.elements.contactForm().should('be.visible');
    contactUsPage.elements.reasonSelect().should('be.visible').and('be.enabled');
    contactUsPage.elements.firstNameInput().should('be.visible').and('be.enabled');
    contactUsPage.elements.lastNameInput().should('be.visible').and('be.enabled');
    contactUsPage.elements.businessEmailInput().should('be.visible').and('be.enabled');
    contactUsPage.elements.websiteInput().should('be.visible').and('be.enabled');
  });

  it('TC-004 Verify Navigation Between Tabs in the Agent Platform Section', () => {
    homePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    homePage.elements.tab(sections.agentPlatform.speechToTextTab).should('be.visible').and('not.be.disabled').click();
    homePage.elements.activeTab().should('be.visible').and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-state', 'active').and('contain.text', sections.agentPlatform.speechToTextTab);
    homePage.elements.activeIndicator().should('be.visible');
    homePage.elements.activePanel().should('be.visible');
    homePage.elements.chatPanelTitle(sections.agentPlatform.speechToTextContent).should('be.visible');
  });

  it('TC-005 Verify Model List Is Displayed on the Inference tab', () => {
    homePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    homePage.elements.tab(sections.agentPlatform.inferenceTab).scrollIntoView().should('be.visible').click();
    homePage.elements.activeTab().should('contain.text', sections.agentPlatform.inferenceTab)
      .and('have.attr', 'aria-selected', 'true');
    homePage.elements.chooseModelPanel().should('be.visible');
    sections.agentPlatform.models.forEach(model => {
      homePage.elements.modelButton(model).should('be.visible').and('be.enabled').click()
      .should('have.attr', 'aria-pressed', 'true');
    });
  });

  it('TC-006 Verify Language Selector Dropdown Functionality', () => {
    homePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    homePage.elements.tab(sections.agentPlatform.inferenceTab).should('be.visible').click().should('have.attr', 'aria-selected', 'true');
    homePage.elements.languageSelector().should('be.visible').and('have.attr', 'aria-expanded', 'false').click();
    homePage.elements.languageSelector().should('have.attr', 'aria-expanded', 'true');
    homePage.elements.languageDropdown().should('be.visible');
    homePage.elements.languageOption(sections.agentPlatform.language).click();
    homePage.elements.languageSelector().should('contain.text', sections.agentPlatform.language)
      .and('have.attr', 'aria-expanded', 'false');
    homePage.elements.languageDropdown().should('not.exist');
  });

  it('TC-007 Verify Send Message Functionality in the Agent Platform Section', () => {
    homePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    homePage.elements.tab(sections.agentPlatform.inferenceTab).scrollIntoView().should('be.visible').click();
    homePage.elements.messageInput().should('be.visible').type(sections.agentPlatform.message);
    homePage.elements.sendMessageButton().should('be.visible').click();
    homePage.elements.userMessage(sections.agentPlatform.message).should('be.visible');
  });

  it('TC-008 Verify "Explore Our AI Assistant" CTA Navigation', () => {
    homePage.elements.solutionsSection().scrollIntoView().should('be.visible');
    homePage.elements.exploreAiAssistantButton().scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', navigation.voiceAiAgentsUrl);
    voiceAIAgentsPage.elements.pageHeading().should('be.visible').and('contain.text', sections.voiceAi.voiceAiSectionHeading);
  });

});