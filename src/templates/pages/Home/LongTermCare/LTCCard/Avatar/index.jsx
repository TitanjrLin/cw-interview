import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImgCircle from '../../../../../../assets/images/long-term-care/avatar-circle.svg';
import Spinner from '../../../../../../components/styled/Animations/Spinner';

const Wrapper = styled.div`
  padding-top: 100%;
  position: relative;
  background-color: #FFFFFF;
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${ImgCircle});
  background-repeat: no-repeat;
  background-size: contain;
  animation-name: ${Spinner};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Image = styled.img`
  width: 90%;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
`;

class Avatar extends React.Component {
  static propTypes = {
    src: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { src } = this.props;
    return (
      <Wrapper>
        <Circle />
        <Image src={src} />
      </Wrapper>
    );
  }
}

export default Avatar;
