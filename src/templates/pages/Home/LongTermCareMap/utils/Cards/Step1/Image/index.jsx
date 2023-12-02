import React from 'react';
import styled, { keyframes } from 'styled-components';
import ImgStep1 from '../../../../../../../../assets/images/long-term-care-map/step1.svg';
import ImgStep1Pointer from '../../../../../../../../assets/images/long-term-care-map/step1-pointer.svg';

const ATTraverse = keyframes`
  0% { transform: translateX(0) }
  100% { transform: translateX(-250%) }
`;

const Wrapper = styled.div`
  width: 12rem;
  margin: auto;
`;

const Inner = styled.div`
  padding-top: 61.2565%;
  position: relative;
  background-image: url(${ImgStep1});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Pointer = styled.img`
  width: 24%;
  position: absolute;
  right: 0;
  bottom: 0;
  animation-name: ${ATTraverse};
  animation-iteration-count: infinite;
  animation-duration: 2s;
`;

class Step1Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <Inner>
          <Pointer src={ImgStep1Pointer} />
        </Inner>
      </Wrapper>
    );
  }
}

export default Step1Image;
