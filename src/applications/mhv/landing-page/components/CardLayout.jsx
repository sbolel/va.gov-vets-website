import React from 'react';
import NavCard from './NavCard';

const CardLayout = ({ data }) =>
  data.map((row, x) => {
    return (
      <div
        key={`row-${x}`}
        className="vads-l-row vads-u-justify-content--space-between vads-u-margin-bottom--0 medium-screen:vads-u-margin-bottom--2"
      >
        {row.map((col, y) => (
          <div
            key={`col-${y}`}
            className="vads-l-col--12 medium-screen:vads-l-col mhv-u-grid-gap vads-u-margin-bottom--2 medium-screen:vads-u-margin-bottom--0"
          >
            <NavCard title={col.title} icon={col.icon} links={col.links} />
          </div>
        ))}
      </div>
    );
  });

export default CardLayout;