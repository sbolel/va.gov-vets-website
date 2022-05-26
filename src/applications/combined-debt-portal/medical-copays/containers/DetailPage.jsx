import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import scrollToTop from 'platform/utilities/ui/scrollToTop';
import PropTypes from 'prop-types';
import PDFStatementList from '../components/PDFStatementList';
import HTMLStatementList from '../components/HTMLStatementList';
import BalanceQuestions from '../components/BalanceQuestions';
import DisputeCharges from '../components/DisputeCharges';
import HowToPay from '../components/HowToPay';
import FinancialHelp from '../components/FinancialHelp';
import Modals from '../components/Modals';
import Alert from '../components/Alerts';
import { OnThisPage } from '../components/OnThisPage';
import {
  formatDate,
  verifyCurrentBalance,
  mcpHTMLStatementToggle,
} from '../../combined/utils/helpers';

const DetailPage = ({ match }) => {
  const selectedId = match.params.id;
  const [alert, setAlert] = useState('status');
  const combinedPortalData = useSelector(state => state.combinedPortal);
  const statements = combinedPortalData.mcp.statements ?? [];
  const [selectedCopay] = statements?.filter(({ id }) => id === selectedId);
  const title = `Copay bill for ${selectedCopay?.station.facilityName}`;
  const statementDate = formatDate(selectedCopay?.pSStatementDateOutput);
  const isCurrentBalance = verifyCurrentBalance(selectedCopay?.pSStatementDate);
  const acctNum = selectedCopay?.pHAccountNumber
    ? selectedCopay?.pHAccountNumber.toString()
    : selectedCopay?.pHCernerAccountNumber.toString();
  const showHTMLStatements = useSelector(state =>
    mcpHTMLStatementToggle(state),
  );

  useEffect(
    () => {
      if (!isCurrentBalance) {
        setAlert('past-due-balance');
      }
      scrollToTop();
    },
    [isCurrentBalance],
  );

  return (
    <>
      <va-breadcrumbs className="vads-u-font-family--sans no-wrap">
        <a href="/">Home</a>
        <a href="/manage-debt-and-bills">Manage your VA debt and bills</a>
        <a href="/manage-debt-and-bills/summary/">
          Your debt and bills summary
        </a>
        <a href="/manage-debt-and-bills/summary/copay-balances">
          {' '}
          Current copay bills
        </a>
        <a
          href={`/manage-debt-and-bills/summary/copay-balances/${selectedId}/detail`}
        >
          Copay bill for {selectedCopay?.station.facilityName}
        </a>
      </va-breadcrumbs>
      <h1 data-testid="detail-page-title">{title}</h1>
      <p className="vads-u-font-size--h3 vads-u-margin-top--0 vads-u-margin-bottom--5">
        Updated on
        <time
          dateTime={statementDate}
          className="vads-u-margin-x--0p5"
          data-testid="updated-date"
        >
          {statementDate}
        </time>
      </p>
      <Alert type={alert} copay={selectedCopay} />
      <OnThisPage />
      {showHTMLStatements ? (
        <HTMLStatementList selectedId={selectedId} />
      ) : (
        <PDFStatementList />
      )}
      <HowToPay acctNum={acctNum} facility={selectedCopay?.station} />
      <FinancialHelp />
      <DisputeCharges />
      <BalanceQuestions
        facilityLocation={selectedCopay?.station.facilityName}
        facilityPhone={selectedCopay?.station.teLNum}
      />
      <Modals title="Notice of rights and responsibilities">
        <Modals.Rights />
      </Modals>
      <Link className="vads-u-font-size--sm" to="/">
        <i
          className="fa fa-chevron-left vads-u-margin-right--1"
          aria-hidden="true"
        />
        <strong>Return to copay balances</strong>
      </Link>
    </>
  );
};

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default DetailPage;