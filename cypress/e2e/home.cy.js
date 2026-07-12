import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
import VoiceAIAgentsPage from '../pages/VoiceAIAgentsPage';
import navigation from '../fixtures/navigation.json';
import agentPlatform from '../fixtures/agentPlatform.json';

describe('Homepage', () => {

  beforeEach(() => {
    cy.visit(navigation.homeUrl);
  });

  it('TC-002 Verify "Explore the Stack" CTA Navigation', () => {

    HomePage.elements.exploreStackButton().should('be.visible').and('not.be.disabled').click();
    cy.location('hash').should('eq', navigation.exploreStackSection)
    HomePage.elements.stackSection().should('contain.text', 'THE FULL STACK');
  });


  it('TC-003 Verify "Talk to an Expert" CTA Navigation', () => {
    
    HomePage.elements.talkToExpertButton().should('be.visible').and('not.be.disabled').click();

    ContactUsPage.elements.contactForm().should('be.visible');
    ContactUsPage.elements.reasonSelect().should('be.visible').and('be.enabled');
    ContactUsPage.elements.firstNameInput().should('be.visible').and('be.enabled');
    ContactUsPage.elements.lastNameInput().should('be.visible').and('be.enabled');
    ContactUsPage.elements.businessEmailInput().should('be.visible').and('be.enabled');
    ContactUsPage.elements.websiteInput().should('be.visible').and('be.enabled');
  });

  it('TC-004 Verify Navigation Between Tabs in the Agent Platform Section', () => {
    
    HomePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    HomePage.elements.tab(agentPlatform.speechToTextTab).should('be.visible').and('not.be.disabled').click();
    HomePage.elements.activeTab().should('be.visible').and('have.attr', 'aria-selected', 'true')
      .and('have.attr', 'data-state', 'active').and('contain.text', agentPlatform.speechToTextTab);
    
    HomePage.elements.activeIndicator().should('be.visible');
    HomePage.elements.activePanel().should('be.visible');
    HomePage.elements.chatPanelTitle(agentPlatform.speechToTextContent).should('be.visible');
  });

  it('TC-005 Verify Model List Is Displayed on the Inference tab', () => {

    HomePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    HomePage.elements.tab(agentPlatform.inferenceTab).scrollIntoView().should('be.visible').click();
    HomePage.elements.activeTab().should('contain.text', agentPlatform.inferenceTab).and('have.attr', 'aria-selected', 'true');
    HomePage.elements.chooseModelPanel().should('be.visible');

    agentPlatform.models.forEach(model => {
      HomePage.elements.modelButton(model).should('be.visible').and('be.enabled').click()
        .should('have.attr', 'aria-pressed', 'true');
    });
  });

  it('TC-006 Verify Language Selector Dropdown Functionality', () => {

    HomePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    HomePage.elements.tab(agentPlatform.inferenceTab).should('be.visible').click().should('have.attr', 'aria-selected', 'true');
    HomePage.elements.languageSelector().should('be.visible').and('have.attr', 'aria-expanded', 'false').click();
    HomePage.elements.languageSelector().should('have.attr', 'aria-expanded', 'true');
    HomePage.elements.languageDropdown().should('be.visible');
    HomePage.elements.languageOption(agentPlatform.language).click();
    HomePage.elements.languageSelector().should('contain.text', agentPlatform.language)
      .and('have.attr', 'aria-expanded', 'false');

    HomePage.elements.languageDropdown().should('not.exist');
  });

  it('TC-007 Verify Send Message Functionality in the Agent Platform Section', () => {

    HomePage.elements.agentPlatformSection().scrollIntoView().should('be.visible');
    HomePage.elements.tab(agentPlatform.inferenceTab).scrollIntoView().should('be.visible').click();
    HomePage.elements.messageInput().should('be.visible').type(agentPlatform.message);
    HomePage.elements.sendMessageButton().should('be.visible').click();
    HomePage.elements.userMessage(agentPlatform.message).should('be.visible');
  });

  it('TC-008 Verify "Explore Our AI Assistant" CTA Navigation', () => {

    HomePage.elements.solutionsSection().scrollIntoView().should('be.visible');
    HomePage.elements.exploreAiAssistantButton().scrollIntoView().should('be.visible').click();
    cy.location('pathname').should('eq', navigation.voiceAiAgentsUrl);
    VoiceAIAgentsPage.elements.pageHeading().should('be.visible').and('contain.text', navigation.voiceAiAgentsHeading);
  });

});