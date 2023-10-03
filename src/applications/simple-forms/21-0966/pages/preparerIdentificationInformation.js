import {
  titleSchema,
  titleUI,
  ssnOrVaFileNumberSchema,
  ssnOrVaFileNumberUI,
} from 'platform/forms-system/src/js/web-component-patterns';

/** @type {PageSchema} */
export default {
  uiSchema: {
    ...titleUI('Identification information'),
    preparerId: ssnOrVaFileNumberUI(),
  },
  schema: {
    type: 'object',
    properties: {
      'view:title': titleSchema,
      preparerId: ssnOrVaFileNumberSchema,
    },
  },
};