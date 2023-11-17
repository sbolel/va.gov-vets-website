// Import necessary libraries and components
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from 'chai';
import SupportingDocsViewField from '../../../components/SupportingDocsViewField';

// Define a describe block for the component
describe('SupportingDocsViewField', () => {
  // Clean up after each test
  afterEach(cleanup);

  // Test to check if the component renders without crashing
  it('renders without crashing', () => {
    render(
      <SupportingDocsViewField defaultEditButton={() => {}} formData={{}} />,
    );
  });

  // Test to check if the component renders the correct text
  it('renders the correct text', () => {
    const { getByText } = render(
      <SupportingDocsViewField defaultEditButton={() => {}} formData={{}} />,
    );
    expect(getByText('Upload documents (preferably DD214)')).to.exist;
  });

  // Test to check if the component renders the correct number of list items when veteranSupportingDocuments is provided
  it('renders the correct number of list items', () => {
    const formData = {
      veteranSupportingDocuments: [
        { name: 'Document 1', size: 100 },
        { name: 'Document 2', size: 200 },
      ],
    };
    const { getAllByRole } = render(
      <SupportingDocsViewField
        defaultEditButton={() => {}}
        formData={formData}
      />,
    );
    expect(getAllByRole('listitem')).to.have.lengthOf(2);
  });

  // Test to check if the component does not render the list when veteranSupportingDocuments is not provided
  it('does not render the list when veteranSupportingDocuments is not provided', () => {
    const { queryByRole } = render(
      <SupportingDocsViewField defaultEditButton={() => {}} formData={{}} />,
    );
    expect(queryByRole('listitem')).to.be.null;
  });
});