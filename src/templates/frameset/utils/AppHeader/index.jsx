import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bpts } from '../../../../components/styled/RWDStyle';
import LogoLTC from '../../../../assets/images/logos/ltc.svg';
import LogoMOHW from '../../../../assets/images/logos/mohw.svg';
import Menu from './Menu';

const Wrapper = styled.header`
  width: 100%;
  height: 4.5rem;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;

  @media (max-width: ${bpts.medium}) {
    height: 3.858rem;
    padding: 0.857rem 1rem;
  }
`;

const Brand = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 1.2rem;
  color: white;
  white-space: nowrap;
  gap: 1.5rem;

  @media (max-width: ${bpts.medium}) {
    gap: 1.142rem;
  }
`;

const LTCBrand = styled.img`
  height: 100%;
`;

const MOHWBrand = styled.img`
  height: 86.667%;
`;

class AppHeader extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { props } = this;
    return (
      <Wrapper
        className={props.className}
      >
        <Brand>
          <LTCBrand src={LogoLTC} />
          <MOHWBrand src={LogoMOHW} />
        </Brand>
        <Menu />
      </Wrapper>
    );
  }
}

export default AppHeader;
