import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loincCodes } from '../../util/constants';

const CareSummariesAndNotesListItem = props => {
  const { record } = props;
  const isDischargeSummary = record.type === loincCodes.DISCHARGE_SUMMARY;

  return (
    <div
      className="record-list-item vads-u-padding-x--3 vads-u-padding-y--2p5 vads-u-border-color--gray-light vads-u-border--0 vads-u-background-color--gray-lightest card"
      data-testid="record-list-item"
    >
      {/* web view header */}
      <h3 className="vads-u-font-size--h4 vads-u-line-height--4 vads-u-margin-bottom--0p5 no-print">
        <Link
          to={`/summaries-and-notes/${record.id}`}
          data-dd-privacy="mask"
          aria-label={`${record.name} on ${
            isDischargeSummary ? record.dischargeDate : record.dateSigned
          }`}
        >
          {record.name}
        </Link>
      </h3>

      {/* print view header */}
      <h3
        className="vads-u-font-size--h4 vads-u-line-height--4 print-only"
        data-dd-privacy="mask"
      >
        {record.name}
      </h3>

      <div>
        <span className="vads-u-display--inline">
          {isDischargeSummary ? 'Discharged on' : 'Date'}
        </span>
        {': '}
        <span className="vads-u-display--inline" data-dd-privacy="mask">
          {isDischargeSummary ? record.dischargeDate : record.dateSigned}
        </span>
      </div>
      <div>
        <span className="vads-u-display--inline">Location:</span>{' '}
        <span className="vads-u-display--inline" data-dd-privacy="mask">
          {record.location}
        </span>
      </div>
      <div>
        <span className="vads-u-display--inline">
          {isDischargeSummary ? 'Admitted by' : 'Signed by'}:
        </span>{' '}
        <span className="vads-u-display--inline" data-dd-privacy="mask">
          {isDischargeSummary ? record.admittedBy : record.signedBy}
        </span>
      </div>
    </div>
  );
};

export default CareSummariesAndNotesListItem;

CareSummariesAndNotesListItem.propTypes = {
  record: PropTypes.object,
};
