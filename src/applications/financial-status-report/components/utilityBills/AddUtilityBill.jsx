import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  VaTextInput,
  VaNumberInput,
} from '@department-of-veterans-affairs/component-library/dist/react-bindings';
import { isValidCurrency } from '../../utils/validations';
import { MAX_UTILITY_NAME_LENGTH } from '../../constants/checkboxSelections';

const AddUtilityBill = ({ data, goToPath, setFormData }) => {
  const { utilityRecords = [] } = data;

  const RETURN_PATH = '/utility-bill-summary';

  // Borrowed from 995 AddIssue
  // get index from url '/add-issue?index={index}'
  const searchIndex = new URLSearchParams(window.location.search);
  let index = parseInt(searchIndex.get('index'), 10);
  if (Number.isNaN(index)) {
    index = utilityRecords.length;
  }

  const currentUtility = utilityRecords[index] || {};

  // Utility name data/flags
  const [utilityName, setUtilityName] = useState(currentUtility.name || null);
  const nameError = !utilityName ? 'Enter valid text' : null;

  // Utility amount data/flags
  const [utilityAmount, setUtilityAmount] = useState(
    currentUtility.amount || null,
  );
  const amountError = !isValidCurrency(utilityAmount)
    ? 'Enter valid amount'
    : null;

  // shared fun
  const [submitted, setSubmitted] = useState(false);

  // submit issue with validation
  const addOrUpdateUtility = () => {
    setSubmitted(true);

    // Check for errors
    if (!nameError && !amountError) {
      // Update form data
      const newUtility = [...utilityRecords];
      // update new or existing index
      newUtility[index] = {
        name: utilityName,
        amount: utilityAmount,
      };

      setFormData({
        ...data,
        utilityRecords: newUtility,
      });
      goToPath(RETURN_PATH);
    }
  };

  const handlers = {
    onSubmit: event => event.preventDefault(),
    onUtilityNameChange: ({ target }) => {
      setUtilityName(target.value);
    },
    onUtilityAmountChange: event => {
      setUtilityAmount(event.target.value);
    },
    onCancel: event => {
      event.preventDefault();
      goToPath(RETURN_PATH);
    },
    onUpdate: event => {
      event.preventDefault();
      addOrUpdateUtility();
    },
  };

  const headerText =
    utilityRecords.length === index
      ? 'Add your additional utility bill'
      : 'Update your utility bill';

  return (
    <>
      <form onSubmit={handlers.onSubmit}>
        <fieldset>
          <legend
            id="decision-date-description"
            className="vads-u-font-family--serif"
            name="addOrUpdateUtility"
          >
            {headerText}
          </legend>
          <VaTextInput
            className="no-wrap input-size-3"
            error={(submitted && nameError) || null}
            id="add-utility-bill-name"
            label="What is the utility bill?"
            maxlength={MAX_UTILITY_NAME_LENGTH}
            name="add-utility-bill-name"
            onInput={handlers.onUtilityNameChange}
            required
            type="text"
            value={utilityName || ''}
          />
          <VaNumberInput
            className="no-wrap input-size-3"
            error={(submitted && amountError) || null}
            id="add-utility-bill-amount"
            inputmode="decimal"
            label="How much do you pay for this utility bill every month?"
            min={0}
            name="add-utility-bill-amount"
            onInput={handlers.onUtilityAmountChange}
            required
            type="text"
            value={utilityAmount || ''}
          />
          <p>
            <button
              type="button"
              id="cancel"
              className="usa-button-secondary vads-u-width--auto"
              onClick={handlers.onCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              id="submit"
              className="vads-u-width--auto"
              onClick={handlers.onUpdate}
            >
              {`${
                utilityRecords.length === index ? 'Add' : 'Update'
              } utility bill`}
            </button>
          </p>
        </fieldset>
      </form>
    </>
  );
};

AddUtilityBill.propTypes = {
  data: PropTypes.shape({
    utilityRecords: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.string,
      }),
    ),
  }),
  goToPath: PropTypes.func,
  setFormData: PropTypes.func,
};

export default AddUtilityBill;