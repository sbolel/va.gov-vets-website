import React from 'react';

export const ShortFormMessage = () => (
  <va-alert-expandable
    trigger="You’re filling out a shortened application!"
    status="success"
    class="vads-u-margin-y--5"
  >
    <div>
      Your service-connected disability rating is 50% or higher. This is one of
      our eligibility criteria. This means that we don’t have to ask you
      questions about other criteria like income and military service.
    </div>
  </va-alert-expandable>
);