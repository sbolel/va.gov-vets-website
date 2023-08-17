import SecureMessagingSite from './sm_site/SecureMessagingSite';
import PatientInboxPage from './pages/PatientInboxPage';
import FolderManagementPage from './pages/FolderManagementPage';
import mockCustomFolderResponse from './fixtures/folder-custom-metadata.json';
import mockCustomMessagesResponse from './fixtures/message-custom-response.json';
import mockFoldersResponse from './fixtures/folder-response.json';
import mockCustomDetails from './fixtures/custom-response.json';
import PatientMessageDetailsPage from './pages/PatientMessageDetailsPage';
import mockMessages from './fixtures/messages-response.json';
import mockMessagewithAttachment from './fixtures/message-response-withattachments.json';

describe('Secure Messaging Move Message tests', () => {
  it('move message from custom folder', () => {
    const landingPage = new PatientInboxPage();
    const site = new SecureMessagingSite();
    const folderPage = new FolderManagementPage();
    const folderName = mockFoldersResponse.data.at(4).attributes.name;
    const { folderId } = mockFoldersResponse.data.at(4).attributes;
    site.login();
    landingPage.loadInboxMessages();
    cy.get('[data-testid ="my-folders-sidebar"]').click();

    folderPage.clickAndLoadCustomFolder(
      folderName,
      folderId,
      mockCustomFolderResponse,
      mockCustomMessagesResponse,
    );
    folderPage.loadCustomFolderMessageDetails(mockCustomDetails);
    folderPage.selectFolderfromModal();
    folderPage.moveCustomFolderMessageToDifferentFolder();

    folderPage.verifyMoveMessageSuccessConfirmationFocus();
    cy.injectAxe();
    cy.axeCheck('main', {
      rules: {
        'aria-required-children': {
          enabled: false,
        },
        'color-contrast': {
          enabled: false,
        },
      },
    });
  });

  it('move message from inbox', () => {
    const landingPage = new PatientInboxPage();
    const messageDetailsPage = new PatientMessageDetailsPage();
    const site = new SecureMessagingSite();
    const folderPage = new FolderManagementPage();
    site.login();
    landingPage.loadInboxMessages(mockMessages, mockMessagewithAttachment);
    messageDetailsPage.loadMessageDetails(mockMessagewithAttachment);
    folderPage.moveInboxFolderMessageToDifferentFolder();

    folderPage.verifyMoveMessageSuccessConfirmationFocus();
    cy.injectAxe();
    cy.axeCheck('main', {
      rules: {
        'aria-required-children': {
          enabled: false,
        },
        'color-contrast': {
          enabled: false,
        },
      },
    });
  });
});