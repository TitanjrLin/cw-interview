import React from 'react';
import styled from 'styled-components';
import { bpts } from '../../../../components/styled/RWDStyle';
import Header from '../utils/Header';
import SlideShow from './SlideShow';

const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: ${bpts.medium}) {
    padding-top: 4rem;
  }
`;

class OnSiteCare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper id="OnSiteCare">
        <Header
          title="照顧現場"
          slogan="預見安心變老"
          subHeading="LTCS LIVE"
        />
        <SlideShow />
      </Wrapper>
    );
  }
}

export default OnSiteCare;
