import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bpts } from '../../../../../components/styled/RWDStyle';
import SubHeadingComp from '../../../../../components/atoms/SubHeading';
import { Block } from '../styled';

const Wrapper = styled(Block)`
  padding: 0 1rem 0 5.766rem;

  @media (max-width: ${bpts.medium}) {
    padding: 0 1.742rem;
  }
`;

const Inner = styled.div`
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #333333;
  letter-spacing: 0.5px;

  @media (max-width: ${bpts.medium}) {
    font-size: 2.285rem;
    letter-spacing: 0.457px;
  }
`;

const Slogan = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #008088;
  letter-spacing: 0.5px;

  @media (max-width: ${bpts.medium}) {
    font-size: 2.285rem;
    letter-spacing: 0.457px;
  }
`;

const SubHeading = styled(SubHeadingComp)`
  padding-top: 1.1428rem;
  letter-spacing: 0.2625rem;

  @media (min-width: ${bpts.medium}) {
    padding-top: 0;
    position: absolute;
    left: -1.5rem;
    top: 0.5625rem;
    transform: rotate(90deg);
    transform-origin: top left;
  }
`;

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    slogan: PropTypes.string,
    subHeading: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { title, slogan, subHeading } = this.props;
    return (
      <Wrapper>
        <Inner>
          <Title>{title}</Title>
          <Slogan>{slogan}</Slogan>
          <SubHeading>{subHeading}</SubHeading>
        </Inner>
      </Wrapper>
    );
  }
}

export default Header;
