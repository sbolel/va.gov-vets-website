import { expect } from 'chai';
import React from 'react';
import { renderWithStoreAndRouter } from '@department-of-veterans-affairs/platform-testing/react-testing-library-helpers';
import RecordListItem from '../../components/RecordList/RecordListItem';
import reducer from '../../reducers';
import labsAndTests from '../fixtures/labsAndTests.json';

describe('LabsAndTestsListItem component', () => {
  const initialState = {
    mr: {
      labsAndTests: {
        labsAndTestsList: labsAndTests,
        labsAndTestDetails: labsAndTests[0],
      },
    },
  };

  const setup = (state = initialState) => {
    return renderWithStoreAndRouter(
      <RecordListItem record={labsAndTests[0]} type="lab and test results" />,
      {
        initialState: state,
        reducers: reducer,
        path: '/labs-and-tests',
      },
    );
  };

  it('renders without errors', () => {
    const screen = setup();
    expect(screen.getByText('Complete blood count', { exact: true })).to.exist;
  });

  it('should contain the name and date of the record', () => {
    const screen = setup();
    const recordName = screen.getByText('Complete blood count', {
      exact: true,
    });
    const recordDate = screen.getByText('June', { exact: false });
    expect(recordName).to.exist;
    expect(recordDate).to.exist;
  });

  it('should contain a link to view record details', () => {
    const screen = setup();
    const recordDetailsLink = screen.getByRole('link', {
      name: 'Details',
    });
    expect(recordDetailsLink).to.exist;
  });
});