import mockSentMessages from '../fixtures/sentResponse/sent-messages-response.json';
import mockSentFolderMetaResponse from '../fixtures/sentResponse/folder-sent-metadata.json';
import mockSingleMessageResponse from '../fixtures/sentResponse/sent-single-message-response.json';
import mockThreadResponse from '../fixtures/sentResponse/sent-thread-response.json';
import sentSearchResponse from '../fixtures/sentResponse/sent-search-response.json';
import mockSortedMessages from '../fixtures/sentResponse/sorted-sent-messages-response.json';

// import testThreadResponse from '../fixtures/sentResponse/test-thread-response.json'

class PatientMessageSentPage {
  loadMessages = (mockMessagesResponse = mockSentMessages) => {
    cy.intercept(
      'GET',
      '/my_health/v1/messaging/folders/-1',
      mockSentFolderMetaResponse,
    ).as('sentFolder');
    cy.intercept(
      'GET',
      '/my_health/v1/messaging/folders/-1/threads**',
      mockMessagesResponse,
    ).as('sentFolderMessages');
    cy.get('[data-testid="sent-sidebar"]').click();
  };

  loadDetailedMessage = (detailedMessage = mockSingleMessageResponse) => {
    cy.intercept(
      'GET',
      `/my_health/v1/messaging/messages/${
        detailedMessage.data.attributes.messageId
      }/thread`,
      mockThreadResponse,
    ).as('threadResponse');

    cy.intercept(
      'GET',
      `/my_health/v1/messaging/messages/${
        detailedMessage.data.attributes.messageId
      }`,
      mockSingleMessageResponse,
    ).as('detailedMessage');

    cy.get('[data-testid="thread-list-item"]')
      .first()
      .click();
  };

  inputFilterData = text => {
    cy.get('#filter-input')
      .shadow()
      .find('#inputField')
      .type(`${text}`);
  };

  filterMessages = () => {
    cy.intercept(
      'POST',
      '/my_health/v1/messaging/folders/-1/search',
      sentSearchResponse,
    );
    cy.get('[data-testid="filter-messages-button"]').click();
  };

  sortMessagesByDate = (text, sortedResponse = mockSortedMessages) => {
    cy.get('#sort-order-dropdown')
      .shadow()
      .find('#select')
      .select(`${text}`);
    cy.intercept(
      'GET',
      '/my_health/v1/messaging/folders/-1/threads**',
      sortedResponse,
    );
    cy.get('[data-testid="sort-button"]').click({ force: true });
  };

  listBeforeSort = () => {
    cy.get('.thread-list-item')
      .find('.received-date')
      .then(list => {
        const listBeforeSort = Cypress._.map(list, el => el.innerText);
        cy.log(cy.wrap(listBeforeSort));
      });
  };

  listAfterSort = () => {
    this.sortMessagesByDate('Oldest to newest');
    cy.get('.thread-list-item')
      .find('.received-date')
      .then(list => {
        const listAfterSort = Cypress._.map(list, el => el.innerText);
        cy.log(cy.wrap(listAfterSort));
      });
  };

  verifySortedList = () => {
    expect(this.listBeforeSort).not.to.deep.eq(this.listAfterSort);
  };

  clearFilter = () => {
    this.inputFilterData('any');
    this.filterMessages();
    cy.get('[text="Clear Filters"]').click();
  };

  verifyFolderHeader = text => {
    cy.get('[data-testid="folder-header"]').should('have.text', `${text}`);
  };

  verifyResponseBodyLength = (responseData = mockSentMessages) => {
    cy.get('[data-testid="thread-list-item"]').should(
      'have.length',
      `${responseData.data.length}`,
    );
  };

  verifyFilterResults = (filterValue, responseData = sentSearchResponse) => {
    cy.get('[data-testid="message-list-item"]').should(
      'have.length',
      `${responseData.data.length}`,
    );

    cy.get('[data-testid="highlighted-text"]').each(element => {
      cy.wrap(element)
        .invoke('text')
        .then(text => {
          const lowerCaseText = text.toLowerCase();
          expect(lowerCaseText).to.contain(`${filterValue}`);
        });
    });
  };

  verifyFilterFieldCleared = () => {
    cy.get('#filter-input')
      .shadow()
      .find('#inputField')
      .should('be.empty');
  };
}

export default new PatientMessageSentPage();