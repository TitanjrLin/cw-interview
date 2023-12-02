import React from 'react';
import MainFrame from '../../frameset/Main';
import Landing from './Landing';
import LongTermCare from './LongTermCare';
import LongTermCareMap from './LongTermCareMap';
import OnSiteCare from './OnSiteCare';
import Preface from './Preface';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <MainFrame>
        <Landing />
        <Preface />
        <OnSiteCare />
        <LongTermCare />
        <LongTermCareMap />
      </MainFrame>
    );
  }
}

export default Home;
