// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const App = ({ show }) => {
  return show ? (
    <div>
      <h2>How do I file a Supplemental Claim?</h2>
      <h3>For disability compensation claims</h3>
      <p>
        If you have a claim for disability compensation, you can file online
        right now.
      </p>
      <a
        href="/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995"
        className="vads-c-action-link--green"
      >
        File a Supplemental Claim
      </a>
      <h3>For all types of claims</h3>
      <p>
        You can file any type of claim by mail, in person, or with the help of a
        VSO.
      </p>
      <h4>Download and fill out the Supplemental Claim form</h4>
      <p>
        Fill out a Decision Review Request: Supplemental Claim (VA Form
        20-0995).
        <br />
        <a href="/find-forms/about-form-20-0995/">
          Get VA Form 20-0995 to download
        </a>
      </p>
      <p>
        <strong>
          If you want us to get records from your private health care provider,{' '}
        </strong>
        you’ll also need to fill out VA Form 21-4142.
        <br />
        <a href="/find-forms/about-form-21-4142/">
          Get VA Form 21-4142 to download
        </a>
      </p>
      <h4>Option 1: File by mail</h4>
      <p>
        Send your forms and any supporting documents to the address that matches
        the benefit type you’re filing for:
      </p>
      <ul>
        <li>
          Compensation
          <p className="va-address-block">
            Department of Veterans Affairs <br />
            Claims Intake Center <br />
            PO Box 4444 <br />
            Janesville, WI 53547-4444
          </p>
        </li>
        <li>
          Pension/Survivors benefits
          <p className="va-address-block">
            Department of Veterans Affairs <br />
            Claims Intake Center <br />
            PO Box 5365 <br />
            Janesville, WI 53547-5192
          </p>
        </li>
        <li>
          All other benefit types
          <p>
            Check the decision letter for your initial claim for instructions on
            how to submit the form.
          </p>
        </li>
      </ul>
      <h4>Option 2: File in person</h4>
      <p>
        Bring your completed forms and any supporting documents to a VA regional
        office.
      </p>
      <p>
        <a href="/find-locations/">Find a VA regional office near you</a>
        <br />
        <strong>Note: </strong>
        You can ask a VA regional office for copies of the forms to fill out. Or
        call us at <va-telephone contact="8008271000" /> (
        <va-telephone contact="711" tty />) to request forms. We’re here Monday
        through Friday, 8:00 a.m. to 9:00 p.m. ET.
      </p>
      <h4>Option 3: File with the help of a VSO</h4>
      <p>
        A Veterans Service Organization (VSO) or VA-accredited attorney or agent
        can help you file a Supplemental Claim.
        <br />
        <a href="/decision-reviews/get-help-with-review-request">
          Get help requesting a decision review
        </a>
      </p>
    </div>
  ) : (
    <div>
      <h2>How do I file a Supplemental Claim?</h2>
      <p>
        You can file any type of claim by mail, in person, or with the help of a
        VSO.
      </p>
      <h3>Download and fill out the Supplemental Claim form</h3>
      <p>
        Fill out a Decision Review Request: Supplemental Claim (VA Form
        20-0995).
        <br />
        <a href="/find-forms/about-form-20-0995/">
          Get VA Form 20-0995 to download
        </a>
      </p>
      <p>
        <strong>
          If you want us to get records from your private health care provider,{' '}
        </strong>
        you’ll also need to fill out VA Form 21-4142.
        <br />
        <a href="/find-forms/about-form-21-4142/">
          Get VA Form 21-4142 to download
        </a>
      </p>
      <h3>Option 1: File by mail</h3>
      <p>
        Send your forms and any supporting documents to the address that matches
        the benefit type you’re filing for:
      </p>
      <ul>
        <li>
          Compensation
          <p className="va-address-block">
            Department of Veterans Affairs <br />
            Claims Intake Center <br />
            PO Box 4444 <br />
            Janesville, WI 53547-4444
          </p>
        </li>
        <li>
          Pension/Survivors benefits
          <p className="va-address-block">
            Department of Veterans Affairs <br />
            Claims Intake Center <br />
            PO Box 5365 <br />
            Janesville, WI 53547-5192
          </p>
        </li>
        <li>
          All other benefit types
          <p>
            Check the decision letter for your initial claim for instructions on
            how to submit the form.
          </p>
        </li>
      </ul>
      <h3>Option 2: File in person</h3>
      <p>
        Bring your completed forms and any supporting documents to a VA regional
        office.
        <br />
        <a href="/find-locations/">Find a VA regional office near you</a>
        <br />
      </p>
      <p>
        <strong>Note: </strong>
        You can ask a VA regional office for copies of the forms to fill out. Or
        call us at <va-telephone contact="8008271000" /> (
        <va-telephone contact="711" tty />) to request forms. We’re here Monday
        through Friday, 8:00 a.m. to 9:00 p.m. ET.
      </p>
      <h3>Option 3: File with the help of a VSO</h3>
      <p>
        A Veterans Service Organization (VSO) or VA-accredited attorney or agent
        can help you file a Supplemental Claim.
        <br />
        <a href="/decision-reviews/get-help-with-review-request">
          Get help requesting a decision review
        </a>
      </p>
    </div>
  );
};

App.propTypes = {
  // From mapStateToProps.
  show: PropTypes.bool,
};

const mapStateToProps = state => ({
  show: state?.featureToggles?.supplementalClaim,
});

export default connect(
  mapStateToProps,
  null,
)(App);