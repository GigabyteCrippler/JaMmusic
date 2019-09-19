import React from 'react';
import CollegeLutheran from '../CollegeLutheran';
import AppersonAutomotive from '../AppersonAutomotive';
import WideFacebookFeed from './WideFacebookFeed';
// import OHAF from '../OHAF';
import TroPeaks from '../TroPeaks';

const WideCurrentProjects = () => (
  <div className="widescreenHomepage">
    <div className="material-content">
      <div className="container">
        <h3>Our Current Projects</h3>
        <div className="row">
          <div className="col">
            <CollegeLutheran />
          </div>
          <p className="spacer">&nbsp;</p>
          <div className="col">
            <AppersonAutomotive />
          </div>
        </div>
        <p className="spacer">&nbsp;</p>
        <div className="row">
          <div className="col">
            <TroPeaks />
          </div>
          <p className="spacer">&nbsp;</p>
          <div className="col">
            <WideFacebookFeed />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WideCurrentProjects;