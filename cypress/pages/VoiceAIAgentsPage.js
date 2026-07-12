class VoiceAIAgentsPage {

  elements = {
    logo: () => cy.get('img[alt="Telnyx - Global Communications Platform Provider"]'),
    pageHeading: () => cy.get('h1')
  };

}

export default new VoiceAIAgentsPage();