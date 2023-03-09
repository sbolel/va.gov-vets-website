import path from 'path';
import testForm from 'platform/testing/e2e/cypress/support/form-tester';
import { createTestConfig } from 'platform/testing/e2e/cypress/support/form-tester/utilities';
import featureToggles from './fixtures/mocks/feature-toggles.json';
import mockSubmit from './fixtures/mocks/application-submit.json';
import formConfig from '../../config/form';
import manifest from '../../manifest.json';

const testConfig = createTestConfig(
  {
    dataPrefix: 'data',
    dataSets: ['minimal-test', 'maximal-test'],
    dataDir: path.join(__dirname, 'fixtures', 'data'),
    pageHooks: {
      introduction: ({ afterHook }) => {
        afterHook(() => {
          cy.findByText(/start/i, { selector: 'button' });
          cy.findByText(/without signing in/i).click({ force: true });
        });
      },
      'contact-information-1': ({ afterHook }) => {
        cy.injectAxeThenAxeCheck();
        afterHook(() => {
          cy.get('@testData').then(data => {
            cy.fillPage();
            // fillPage doesn't catch state select, so select state manually
            cy.get('select#root_veteran_address_state').select(
              data.veteran.address.state,
            );
            if (data.veteran.address.city) {
              if (data.veteran.address.isMilitary) {
                // there is a select dropdown instead when military is checked
                cy.get('select#root_veteran_address_city').select(
                  data.veteran.address.city,
                );
              } else {
                cy.get('#root_veteran_address_city').type(
                  data.veteran.address.city,
                );
              }
            }
            cy.axeCheck();
            cy.findByText(/continue/i, { selector: 'button' }).click();
          });
        });
      },
    },
    setupPerTest: () => {
      cy.intercept('GET', '/v0/feature_toggles?*', featureToggles);
      cy.intercept('POST', '/forms_api/v1/simple_forms', mockSubmit);
    },
    skip: false,
  },
  manifest,
  formConfig,
);

testForm(testConfig);