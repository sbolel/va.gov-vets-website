// Dependencies.
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Relative imports.
import { App } from '.';
import AuthContext from '../AuthContext';
import UnauthContext from '../UnauthContext';

describe('BTSSS Widget', () => {
  it('renders what we expect when unauthenticated', () => {
    const wrapper = shallow(
      <App currentlyLoggedIn={false} showBtsssLoginWidget />,
    );
    expect(wrapper.find(UnauthContext)).to.have.lengthOf(1);
    expect(wrapper.find(AuthContext)).to.have.lengthOf(0);
    wrapper.unmount();
  });

  it('renders what we expect when authenticated', () => {
    const wrapper = shallow(<App currentlyLoggedIn showBtsssLoginWidget />);
    expect(wrapper.find(UnauthContext)).to.have.lengthOf(0);
    expect(wrapper.find(AuthContext)).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('Should not render either when feature flag is falsey', () => {
    const wrapper = shallow(
      <App currentlyLoggedIn showBtsssLoginWidget={false} />,
    );
    expect(wrapper.find(UnauthContext)).to.have.lengthOf(0);
    expect(wrapper.find(AuthContext)).to.have.lengthOf(0);
    wrapper.unmount();
  });
});