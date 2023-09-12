import * as h from '../helpers';
import { ROUTES } from '../../../constants';

// Note: anything requiring a VA button click is tested here as unit tests cannot
// target the shadow DOM
describe('PACT Act', () => {
  describe(`1990 or later - "I'm not sure" and single checkbox responses throughout`, () => {
    it('navigates through the flow forward and backward successfully', () => {
      cy.visit('/pact-act-wizard-test');

      h.verifyUrl(ROUTES.HOME);

      // Home
      h.verifyElement(h.START_LINK);
      cy.injectAxeThenAxeCheck();
      h.clickStart();

      // SERVICE_PERIOD
      h.verifyUrl(ROUTES.SERVICE_PERIOD);
      h.verifyElement(h.SERVICE_PERIOD_INPUT);
      h.selectRadio(h.SERVICE_PERIOD_INPUT, 0);
      h.clickContinue();

      // BURN_PIT_2_1
      h.verifyUrl(ROUTES.BURN_PIT_2_1);
      h.verifyElement(h.BURN_PIT_2_1_INPUT);
      h.selectRadio(h.BURN_PIT_2_1_INPUT, 2);
      h.clickContinue();

      // TODO: test navigation to Burn Pits 2.1.1 when that mapping logic exists
      // BURN_PIT_2_11

      // BURN_PIT_2_1
      h.verifyUrl(ROUTES.BURN_PIT_2_1);
      h.verifyElement(h.BURN_PIT_2_1_INPUT);
      h.clickBack();

      // SERVICE_PERIOD
      h.verifyUrl(ROUTES.SERVICE_PERIOD);
      h.verifyElement(h.SERVICE_PERIOD_INPUT);
      h.clickBack();

      // Home
      h.verifyElement(h.START_LINK);
    });
  });
});