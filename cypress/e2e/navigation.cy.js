import VoiceAIAgentsPage from '../pages/VoiceAIAgentsPage';
import navigation from '../fixtures/navigation.json';

describe('Navigation', () => {

  it('TC-001 Verify Logo Redirects to Homepage', () => {
    cy.visit(navigation.voiceAiAgentsUrl);
    VoiceAIAgentsPage.elements.logo().should('be.visible').click();
    cy.location('pathname').should('eq', navigation.homeUrl);
  });

});