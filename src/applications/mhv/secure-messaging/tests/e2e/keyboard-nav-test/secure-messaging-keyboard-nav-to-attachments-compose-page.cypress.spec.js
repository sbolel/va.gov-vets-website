import SecureMessagingSite from '../sm_site/SecureMessagingSite';
import PatientInboxPage from '../pages/PatientInboxPage';
import PatientComposePage from '../pages/PatientComposePage';

describe('Secure Messaging Keyboard Nav to Attachment', () => {
  it('Keyboard Nav to Focus on Attachment', () => {
    const landingPage = new PatientInboxPage();
    const composePage = new PatientComposePage();
    const site = new SecureMessagingSite();
    site.login();
    landingPage.loadInboxMessages();
    landingPage.loadComposeMessagePage();
    composePage.selectRecipient('CAMRY_PCMM RELATIONSHIP_05092022_SLC4');
    cy.tabToElement('#OTHEROTHER');
    cy.realPress(['Enter']);
    composePage.getMessageSubjectField().type('Test Attachment Focus');
    composePage.getMessageBodyField().type('Focus Attachment');
    cy.get('[data-testid="attach-file-input"]').selectFile(
      'src/applications/mhv/secure-messaging/tests/e2e/fixtures/test_image.jpg',
      { force: true },
    );
    composePage.verifyFocusonMessageAttachment();
    cy.injectAxe();
    cy.axeCheck();
  });
});