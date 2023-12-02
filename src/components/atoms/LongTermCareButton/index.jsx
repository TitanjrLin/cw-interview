import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bpts } from '../../styled/RWDStyle';
import IconArrowRight from './source/arrow-right.svg';
import IconArrowRightWhite from './source/arrow-right-white.svg'

const Circle = styled.div`
  width: 3.2em;
  height: 3.2em;
  position: absolute;
  border-radius: 50%;
`;

const Arrow = styled(Circle)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${IconArrowRight});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  z-index: 3;
`;

const DefaultBackground = styled(Circle)`
  top: 0;
  right: 0;
  z-index: 1;
  background-color: #CADEDF;
`;

const HoverBackground = styled(Circle)`
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #EC6C00;
  transition: left 0.5s;
  transform: translateX(-100%);
`;

const Title = styled.span`
  padding: 0 3.7em 0 1.6em;
  position: absolute;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  z-index: 3;
`;

const Button = styled.button`
  padding: 0;
  position: relative;
  border: 0;
  border-radius: 10em;
  background-color: #008088;
  color: #FFFFFF;
  font-size: 1.25rem;
  line-height: 3.2;
  overflow: hidden;

  * {
    pointer-events: none;
  }

  @media (max-width: ${bpts.medium}) {
    font-size: 1.1428rem;
  }

  &:hover {
    ${HoverBackground} {
      left: 100%;
    }
  }

  &:active {
    ${Arrow} {
      background-image: url(${IconArrowRightWhite});
    }
  }
`;

class LongTermCareButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { className, title } = this.props;
    return (
      <Button
        className={className}
        onClick={this.props.onClick}
      >
        <DefaultBackground />
        <HoverBackground />
        <Arrow />
        <span>&nbsp;</span>
        <Title>{title}</Title>
      </Button>
    );
  }
}

export default LongTermCareButton;
