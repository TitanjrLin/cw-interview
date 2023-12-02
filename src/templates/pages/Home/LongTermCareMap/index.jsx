import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../utils/Header';
import { connect } from 'react-redux';
import ImgMapBorderDesktop from '../../../../assets/images/long-term-care-map/border-desktop.png';
import ImgMapBorderMobile from '../../../../assets/images/long-term-care-map/border-mobile.png';
import { bpts } from '../../../../components/styled/RWDStyle';
import { CssLongTermCareCBGDesktop } from '../../../../components/styled/CircleBackground';
import LTCButton from '../../../../components/atoms/LongTermCareButton';
import CardList from './CardList';
import CardSlideShow from './CardSlideShow';

const Wrapper = styled.section`
  ${CssLongTermCareCBGDesktop}

  padding-top: 7.5rem;
  background-position: center -27rem;

  @media (max-width: ${bpts.medium}) {
    padding-top: 4rem;
    background-image: none;
    background-color: rgba(202, 222, 223, 0.2);
  }
`;

const MapWrapper = styled.div`
  margin: 2rem 2.5rem 2rem;

  @media (max-width: ${bpts.medium}) {
    margin: 1.7142rem 0 2rem;
  }
`;

const MapInner = styled.div`
  position: relative;
  padding-top: 58.8235%;
  background-image: url(${ImgMapBorderDesktop});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${bpts.medium}) {
    padding-top: 160%;
    background-image: url(${ImgMapBorderMobile});
  }
`;

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapContent = styled.div`
`;

const MapFooter = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${bpts.medium}) {
    margin-top: 4rem;
  }
`;

const FindButton = styled(LTCButton)`
  min-width: 20.625rem;

  @media (max-width: ${bpts.medium}) {
    min-width: 19.214rem;
  }
`;

class LongTermCareMap extends React.Component {
  static propTypes = {
    system: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  gotoFinder = () => {
    const url = 'https://ltcpap.mohw.gov.tw/public/index.html';
    window.open(url, '_blank');
  };

  rednerCards = () => {
    const { system } = this.props;
    const isMobile = _.get(system, 'isMobile', false);
    return isMobile ? <CardSlideShow /> : <CardList />;
  };

  render() {
    return (
      <Wrapper id="LongTermCareMap">
        <Header
          title="長照地圖"
          slogan="厝邊好朋友"
          subHeading="LTCS MAP"
        />
        <MapWrapper>
          <MapInner>
            <MapContainer>
              <MapContent>
                {this.rednerCards()}
                <MapFooter>
                  <FindButton
                    title="尋找附近的長照服務"
                    onClick={this.gotoFinder}
                  />
                </MapFooter>
              </MapContent>
            </MapContainer>
          </MapInner>
        </MapWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  system: state.system,
});

const Component = connect(
  mapStateToProps,
  null,
  null,
  { forwardRef: true },
)(LongTermCareMap);

export default Component;
