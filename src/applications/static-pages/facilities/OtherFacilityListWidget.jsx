import React from 'react';
import { apiRequest } from 'platform/utilities/api';
import FacilityApiAlert from './FacilityApiAlert';
import { cleanPhoneNumber, sortFacilitiesByName } from './facilityUtilities';
import FacilityAddress from './FacilityAddress';

export default class OtherFacilityListWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.request = apiRequest(`/facilities/va?ids=${this.props.facilities}`, {
      apiVersion: 'v1',
    })
      .then(this.handleFacilitiesSuccess)
      .catch(this.handleFacilitiesError);
  }

  handleFacilitiesSuccess = facilities => {
    this.setState({
      loading: false,
      facilities: facilities.data,
    });
  };

  handleFacilitiesError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    if (this.state.loading) {
      return <va-loading-indicator message="Loading facilities..." />;
    }

    if (this.state.error) {
      return <FacilityApiAlert />;
    }

    const facilitiesList = sortFacilitiesByName(this.state.facilities).map(
      facility => (
        <div
          key={facility.id}
          className="region-list usa-width-one-whole vads-u-display--flex vads-u-flex-direction--column small-screen:vads-u-flex-direction--row facility vads-u-margin-bottom--2p5 small-screen:vads-u-margin-bottom--4 medium-screen:vads-u-margin-bottom--5"
        >
          <section key={facility.id} className="usa-width-one-half">
            <h3 className="vads-u-margin-bottom--1 vads-u-font-size--md medium-screen:vads-u-font-size--lg">
              <a href={`/find-locations/facility/${facility.id}`}>
                {facility.attributes.name}
              </a>
            </h3>
            <FacilityAddress facility={facility} />
            <div className="vads-u-margin-bottom--0">
              {facility.attributes.phone.main && (
                <div className="main-phone vads-u-margin-bottom--1">
                  <strong>Main phone: </strong>
                  <va-telephone
                    contact={cleanPhoneNumber(facility.attributes.phone.main)}
                  />
                </div>
              )}
              {facility.attributes.classification && (
                <div className="facility-type">
                  <p className="vads-u-margin--0">
                    <strong>Facility type:</strong>
                    {` ${facility.attributes.classification}`}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      ),
    );
    return <div className="locations">{facilitiesList}</div>;
  }
}
