import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import sinon from 'sinon';
import { ROUTES } from '../../constants';
import { RESPONSES, SHORT_NAME_MAP } from '../../constants/question-data-map';
import { displayConditionsMet } from '../../utilities/display-logic';

import Radiation23A from '../../containers/questions/radiation/Radiation-2-3-A';

const { RADIATION_2_3_A } = SHORT_NAME_MAP;
const {
  AMERICAN_SAMOA,
  CAMBODIA,
  DURING_BOTH_PERIODS,
  EIGHTYNINE_OR_EARLIER,
  GUAM,
  JOHNSTON_ATOLL,
  KOREA_DMZ,
  LAOS,
  NINETY_OR_LATER,
  NO,
  NOT_SURE,
  THAILAND,
  VIETNAM_REP,
  VIETNAM_WATERS,
  YES,
} = RESPONSES;

// Form data is intentionally skipped for the render tests since these are very basic "does it load?" tests

// This file contains tests for the component's display as well as testing displayConditionsMet
// for this question specifically

const mockStoreStandard = {
  getState: () => ({
    pactAct: {
      form: {},
      viewedIntroPage: true,
    },
  }),
  subscribe: () => {},
  dispatch: () => {},
};

const mockStoreNoIntroPage = {
  getState: () => ({
    pactAct: {
      form: {},
      viewedIntroPage: false,
    },
  }),
  subscribe: () => {},
  dispatch: () => {},
};

const setRadiationStub = sinon.stub();
const pushStub = sinon.stub();

const propsStandard = {
  formResponses: {},
  setRadiation23A: setRadiationStub,
  router: {
    push: pushStub,
  },
  viewedIntroPage: true,
};

const propsNoIntroPage = {
  formResponses: {},
  setRadiation23A: setRadiationStub,
  router: {
    push: pushStub,
  },
  viewedIntroPage: false,
};

describe('Radiation 2.3.A Page', () => {
  afterEach(() => {
    setRadiationStub.resetHistory();
    pushStub.resetHistory();
  });

  it('should correctly load the radiation page in the standard flow', () => {
    const screen = render(
      <Provider store={mockStoreStandard}>
        <Radiation23A {...propsStandard} />
      </Provider>,
    );

    expect(screen.getByTestId('paw-radiation2_3_A')).to.exist;
  });

  describe('redirects', () => {
    it('should redirect to home when the intro page has not been viewed', () => {
      render(
        <Provider store={mockStoreNoIntroPage}>
          <Radiation23A {...propsNoIntroPage} />
        </Provider>,
      );

      expect(pushStub.withArgs(ROUTES.HOME).called).to.be.true;
    });
  });
});

describe('displayConditionsAreMet', () => {
  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_B: [VIETNAM_REP],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_B: [VIETNAM_WATERS],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_B: [KOREA_DMZ],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [AMERICAN_SAMOA],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [CAMBODIA],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [GUAM],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [JOHNSTON_ATOLL],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [LAOS],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [THAILAND],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_1_B: [GUAM, LAOS, THAILAND],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_2: YES,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: YES,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: NO,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: NOT_SURE,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_B: [VIETNAM_REP],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_B: [VIETNAM_WATERS],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_B: [KOREA_DMZ],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [AMERICAN_SAMOA],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [CAMBODIA],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [GUAM],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [JOHNSTON_ATOLL],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [LAOS],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [THAILAND],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_1_B: [GUAM, LAOS, THAILAND],
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_2: YES,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_3: YES,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_3: NO,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
      ORANGE_2_2_3: NOT_SURE,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: YES,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: NO,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return true when the display conditions are met', () => {
    const formResponses = {
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
      ORANGE_2_2_3: NOT_SURE,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(true);
  });

  it('RADIATION_2_3_A: should return false when the display conditions are not met', () => {
    const formResponses = {
      SERVICE_PERIOD: NINETY_OR_LATER,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(
      false,
    );
  });

  it('RADIATION_2_3_A: should return false when the display conditions are not met', () => {
    const formResponses = {
      ORANGE_2_2_B: NO,
      ORANGE_2_2_1_B_1: NO,
      ORANGE_2_2_2: NO,
      SERVICE_PERIOD: EIGHTYNINE_OR_EARLIER,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(
      false,
    );
  });

  it('RADIATION_2_3_A: should return false when the display conditions are not met', () => {
    const formResponses = {
      ORANGE_2_2_B: NO,
      ORANGE_2_2_1_B_1: NO,
      ORANGE_2_2_2: NO,
      SERVICE_PERIOD: DURING_BOTH_PERIODS,
    };

    expect(displayConditionsMet(RADIATION_2_3_A, formResponses)).to.equal(
      false,
    );
  });
});