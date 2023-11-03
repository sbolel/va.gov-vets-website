import fullSchemaPreNeed from 'vets-json-schema/dist/40-10007-schema.json';

import applicantDescription from 'platform/forms/components/ApplicantDescription';
import currentOrPastDateUI from 'platform/forms-system/src/js/definitions/currentOrPastDate';

import { pick } from 'lodash';
import {
  applicantDetailsSubHeader,
  fullMaidenNameUI,
  ssnDashesUI,
} from '../../utils/helpers';

const { claimant } = fullSchemaPreNeed.properties.application.properties;

export const uiSchema = {
  'ui:description': applicantDescription,
  application: {
    'ui:title': applicantDetailsSubHeader,
    claimant: {
      name: fullMaidenNameUI,
      ssn: ssnDashesUI,
      dateOfBirth: currentOrPastDateUI('Date of birth'),
    },
  },
};
export const schema = {
  type: 'object',
  properties: {
    application: {
      type: 'object',
      properties: {
        claimant: {
          type: 'object',
          required: ['name', 'ssn', 'dateOfBirth'],
          properties: pick(claimant.properties, ['name', 'ssn', 'dateOfBirth']),
        },
      },
    },
  },
};