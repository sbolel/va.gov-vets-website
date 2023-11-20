import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { HCA_ENROLLMENT_STATUSES } from '../../../../../../utils/constants';
import FAQContent from '../../../../../../components/IntroductionPage/EnrollmentStatus/FAQ/FAQContent';

describe('hca <FAQContent>', () => {
  const expectedOutputs = {
    [HCA_ENROLLMENT_STATUSES.activeDuty]:
      '<h3 class="vads-u-font-size--h4">Can I apply for VA health care?</h3><p>As an active-duty service member, you can apply for VA health care if both of the below descriptions are true for you.</p><p><strong>Both of these must be true:</strong></p><ul><li>You’ve received your separation orders, and</li><li>You have less than a year until your separation date</li></ul><p><strong>If you don’t meet the requirements listed above</strong></p><p>Please don’t apply at this time. We welcome you to apply once you meet these requirements.</p><p><strong>If you’ve already applied, think you’ve received this message in error, or have any questions</strong></p><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p>',
    [HCA_ENROLLMENT_STATUSES.canceledDeclined]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Can I apply again?</h3><p>Yes. If you have questions about how to complete your application, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p>',
    [HCA_ENROLLMENT_STATUSES.closed]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Can I apply again?</h3><p>Yes. If you have questions about how to complete your application, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p>',
    [HCA_ENROLLMENT_STATUSES.enrolled]:
      '<h3 class="vads-u-font-size--h4">How can I change my address, income, or other information in my VA health care records?</h3><p>To update your information, please submit a Health Benefits Update Form (VA Form 10-10EZR).</p><p><va-link href="/health-care/update-health-information/" text="Find out how to submit VA Form 10-10EZR"></va-link>.</p><p>Or you can update your address and other contact information in your VA.gov profile. This will update your information across several VA benefits and services.</p><p><va-link href="/profile/contact-information/" text="Go to your profile to update your address"></va-link>.</p><h3 class="vads-u-font-size--h4">Will applying again update my information?</h3><p><strong>No. A new application won’t update your information.</strong> If you have questions about the information we have on record for you, please call your nearest VA medical center.</p><p><a class="usa-button-primary" href="/find-locations/">Find your VA medical center</a></p>',
    [HCA_ENROLLMENT_STATUSES.ineligCHAMPVA]:
      '<h3 class="vads-u-font-size--h4">Do any VA medical centers treat CHAMPVA recipients?</h3><p>Yes. To learn more about VA medical centers that offer services to CHAMPVA recipients, or if you have any other questions, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligCharacterOfDischarge]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">What if I want to review my discharge status, or think I may qualify for an upgrade?</h3><p>You can get more information on our website:</p><p><va-link href="/discharge-upgrade-instructions/" text="Find out who may qualify for a discharge upgrade"></va-link></p><p><va-link href="/discharge-upgrade-instructions/#other-options" text="Learn more about the Character of Discharge review process"></va-link></p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligCitizens]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligFilipinoScouts]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligFugitiveFelon]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligGuardReserve]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligMedicare]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligNotEnoughTime]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligNotVerified]:
      '<h3 class="vads-u-font-size--h4">What should I do if I want to submit proof of my military service, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligOther]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligOver65]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligRefusedCopay]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.ineligTrainingOnly]:
      '<h3 class="vads-u-font-size--h4">What should I do if I think this information is incorrect, or if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>A new application most likely won’t change our decision on your eligibility.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.nonMilitary]:
      '<h3 class="vads-u-font-size--h4">Can I apply for VA health care?</h3><p>The health care application on this page is only for Veterans or service members who have received their separation orders and are within one year of their separation. If you are a family member or caregiver submitting a health care application on behalf of a Veteran or service member, then you can use this tool to help get them VA health care.</p><p>If you’re not helping a Veteran or service member sign up, you may be eligible for your own VA health care benefits.</p><p><va-link href="/health-care/family-caregiver-benefits/" text="Learn about health care for spouses, dependents, and family caregivers"></va-link></p><p><strong>Note: If you are a Veteran or service member receiving this message in error, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</strong></p>',
    [HCA_ENROLLMENT_STATUSES.pendingMt]:
      '<h3 class="vads-u-font-size--h4">How do I submit this information to VA?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone> for directions on how to submit your information. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Should I just submit a new application with all my information?</h3><p><strong>No. We’re in the process of reviewing your current application, and submitting a new application won’t affect our decision.</strong> To get help providing the information we need to complete our review, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.pendingOther]:
      '<h3 class="vads-u-font-size--h4">How will I know if VA needs more information from me to verify my military service?</h3><p>If we need more information, we’ll send you a letter in the mail. If you have any questions, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Should I apply again?</h3><p><strong>No. We’re in the process of reviewing your current application, and submitting a new application won’t affect our decision.</strong> If you’d like to talk about your current application, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.pendingPurpleHeart]:
      '<h3 class="vads-u-font-size--h4">How do I submit this information to VA?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone> for directions on how to submit your information. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Should I just submit a new application with all my information?</h3><p><strong>No. We’re in the process of reviewing your current application, and submitting a new application won’t affect our decision.</strong> To get help providing the information we need to complete our review, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.pendingUnverified]:
      '<h3 class="vads-u-font-size--h4">How will I know if VA needs more information from me to verify my military service?</h3><p>If we need more information, we’ll send you a letter in the mail. If you have any questions, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Should I apply again?</h3><p><strong>No. We’re in the process of reviewing your current application, and submitting a new application won’t affect our decision.</strong> If you’d like to talk about your current application, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.rejectedIncWrongEntry]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>Only if you’ve had a change in your life since you last applied that may make you eligible for VA health care now—like receiving a VA rating for a service-connected disability or experiencing a decrease in your income.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.rejectedScWrongEntry]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>Only if you’ve had a change in your life since you last applied that may make you eligible for VA health care now—like receiving a VA rating for a service-connected disability or experiencing a decrease in your income.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
    [HCA_ENROLLMENT_STATUSES.rejectedRightEntry]:
      '<h3 class="vads-u-font-size--h4">What should I do if I have questions about my eligibility?</h3><p>Please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>. We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. <dfn><abbr title="Eastern Time">ET</abbr></dfn>.</p><h3 class="vads-u-font-size--h4">Can I still get mental health care?</h3><p>You may still be able to access certain mental health care services even if you’re not enrolled in VA health care.</p><p><va-link href="/health-care/health-needs-conditions/mental-health/" text="Learn more about getting started with VA mental health services"></va-link></p><h3 class="vads-u-font-size--h4">Could applying again change VA’s decision?</h3><p><strong>Only if you’ve had a change in your life since you last applied that may make you eligible for VA health care now—like receiving a VA rating for a service-connected disability or experiencing a decrease in your income.</strong> If you’d like to talk about your options, please call our enrollment case management team at <va-telephone contact="8772228387"></va-telephone>.</p><p>We only recommend applying again if you’ve already worked with our enrollment case management team, and they’ve advised you to reapply.</p>',
  };

  context('when the content is generated based on enrollment status', () => {
    it('should have content for all possible statuses', () => {
      const possibleEnrollmentStatuses = Object.values({
        ...HCA_ENROLLMENT_STATUSES,
      }).filter(
        enrollmentStatus =>
          enrollmentStatus !== HCA_ENROLLMENT_STATUSES.activeDuty &&
          enrollmentStatus !== HCA_ENROLLMENT_STATUSES.deceased &&
          enrollmentStatus !== HCA_ENROLLMENT_STATUSES.noneOfTheAbove,
      );
      const testedEnrollmentStatuses = Object.keys(expectedOutputs);
      expect(
        possibleEnrollmentStatuses.every(enrollmentStatus =>
          testedEnrollmentStatuses.includes(enrollmentStatus),
        ),
      ).to.be.true;
    });

    Object.keys(expectedOutputs).forEach(enrollmentStatus => {
      it(`should render the correct content for status: ${enrollmentStatus}`, () => {
        const props = { enrollmentStatus };
        const { container } = render(<FAQContent {...props} />);
        expect(container).to.not.be.empty;
        expect(container).to.contain.html(expectedOutputs[enrollmentStatus]);
      });
    });
  });
});