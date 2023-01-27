import { submitToUrl } from 'platform/forms-system/src/js/actions';
import { transformForSubmit } from 'platform/forms-system/src/js/helpers';
import { DEBT_TYPES } from '../utils/helpers';

// Analytics event
export const buildEventData = ({ selectedDebtsAndCopays }) => {
  // temp - Handling empty selectedDebtsAndCopays
  if (!selectedDebtsAndCopays.length) {
    return {
      'submission-type': 'debt-submission',
    };
  }

  // Check types of debts and copays selected
  const hasDebts = selectedDebtsAndCopays.some(
    selected => selected.debtType === DEBT_TYPES.DEBT,
  );
  const hasCopays = selectedDebtsAndCopays.some(
    selected => selected.debtType === DEBT_TYPES.COPAY,
  );

  if (hasDebts && hasCopays) {
    return {
      'submission-type': 'combo-submission',
    };
  }

  if (hasDebts && !hasCopays) {
    return {
      'submission-type': 'debt-submission',
    };
  }

  if (!hasDebts && hasCopays) {
    return {
      'submission-type': 'copay-submission',
    };
  }

  // This should never happen
  return {
    'submission-type': 'err-submission',
  };
};

const submitForm = (form, formConfig) => {
  const { submitUrl, trackingPrefix } = formConfig;
  const body = formConfig.transformForSubmit
    ? formConfig.transformForSubmit(formConfig, form)
    : transformForSubmit(formConfig, form);

  // eventData for analytics
  const eventData = buildEventData(form.data);
  return submitToUrl(body, submitUrl, trackingPrefix, eventData);
};

export default submitForm;