import PatientInboxPage from '../pages/PatientInboxPage';
import SecureMessagingSite from '../sm_site/SecureMessagingSite';

describe('Secure Messaging Verify Links and Buttons Keyboard Nav', () => {
  it('Tab to Links and Buttons on the Landing Page', () => {
    const site = new SecureMessagingSite();
    const landingPage = new PatientInboxPage();
    site.login();
    landingPage.loadInboxMessages();
    landingPage.loadLandingPagebyTabbingandEnterKey();
    cy.tabToElement('.sidebar-navigation-messages-list-header > a');
    cy.realPress(['Enter']);
    cy.tabToElement('[data-testid="compose-message-link"]').should(
      'have.focus',
    );
    cy.tabToElement('.vads-c-action-link--blue').should('have.focus');
    cy.tabToElement('.welcome-message > :nth-child(4) > a').should(
      'have.focus',
    );
    cy.tabToElement('.vads-u-padding-right--1 > .hydrated').should(
      'have.focus',
    );
    cy.injectAxe();
    cy.axeCheck();
  });
});