import React from 'react';
import styled from 'styled-components';
import ImgScrollDown from '../../../../../assets/images/scroll-down.svg';
import ATJumping from '../../../../../components/styled/Animations/Jumping';

const Button = styled.button`
  padding: 0;
  border: 0;
  background: none;
  animation-name: ${ATJumping};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

class ScrollDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onClick = () => {
    const el = document.getElementById('Preface');
    el.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <Button onClick={this.onClick}>
        <img src={ImgScrollDown} />
      </Button>
    );
  }
}

export default ScrollDown;
