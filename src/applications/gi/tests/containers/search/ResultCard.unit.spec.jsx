import React from 'react';
import { expect } from 'chai';
import { waitFor } from '@testing-library/react';
import { mockConstants, renderWithStoreAndRouter } from '../../helpers';
import ResultCard from '../../../containers/search/ResultCard';

const INSTITUTION = {
  name: "AUSTIN'S BEAUTY COLLEGE INC",
  facilityCode: '25008642',
  city: 'CLARKSVILLE',
  state: 'TN',
  country: 'USA',
  accreditationType: 'hybrid',
  studentCount: 28,
  ratingAverage: null,
  ratingCount: 0,
  institutionRating: null,
  type: 'FOR PROFIT',
  cautionFlags: [],
  cautionFlag: null,
  studentVeteran: null,
  yr: false,
  campusType: 'Y',
  highestDegree: 'Certificate',
  hbcu: 0,
  menonly: 0,
  womenonly: 0,
  relaffil: null,
  hsi: 0,
  nanti: 0,
  annhi: 0,
  aanapii: 0,
  pbi: 0,
  tribal: 0,
  preferredProvider: false,
  dodBah: 1596,
  bah: 1707,
  latitude: 36.5277607,
  longitude: -87.3588703,
  distance: null,
  accredited: true,
  vetTecProvider: false,
  programCount: null,
  programLengthInHours: null,
  schoolProvider: true,
  employerProvider: false,
  vrrap: null,
};

describe('<ResultCard>', () => {
  it('should render', async () => {
    const screen = renderWithStoreAndRouter(
      <ResultCard institution={INSTITUTION} key={25008642} version={null} />,
      {
        initialState: {
          constants: mockConstants(),
        },
      },
    );

    await waitFor(() => {
      expect(screen).to.not.be.null;
    });
  });
});