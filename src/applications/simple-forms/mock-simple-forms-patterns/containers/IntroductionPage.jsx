import React from 'react';

import { focusElement } from 'platform/utilities/ui';
import FormTitle from 'platform/forms-system/src/js/components/FormTitle';
import SaveInProgressIntro from 'platform/forms/save-in-progress/SaveInProgressIntro';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  render() {
    const { route } = this.props;
    const { formConfig, pageList } = route;

    return (
      <article className="schemaform-intro">
        <FormTitle
          title="Apply for Simple Forms Patterns"
          subTitle="Application in Simple Forms Patterns"
        />
        <h2>Here&rsquo;s how to apply online</h2>
        <p>
          Complete this form. After you submit the form, you&rsquo;ll get a
          confirmation message. You can print this page for your records.
        </p>
        <SaveInProgressIntro
          headingLevel={2}
          prefillEnabled={formConfig.prefillEnabled}
          messages={formConfig.savedFormMessages}
          pageList={pageList}
          startText="Start the housing grant application"
          testActionLink
        >
          Please complete the Simple Forms Patterns form to apply for Simple
          Forms Patterns.
        </SaveInProgressIntro>
        <p />
        <va-omb-info
          res-burden="10"
          omb-number="SIMPLE_FORMS_PATTERNS"
          exp-date="6/20/2024"
        />
      </article>
    );
  }
}

export default IntroductionPage;