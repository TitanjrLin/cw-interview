import React from 'react';
import styled from 'styled-components';
import StepCard1 from '../utils/Cards/Step1';
import StepCard2 from '../utils/Cards/Step2';
import StepCard3 from '../utils/Cards/Step3';

const Wrapper = styled.div`
  max-width: 52.5rem;
  padding: 5.715%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9%;
`;

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <StepCard1 />
        <StepCard2 />
        <StepCard3 />
      </Wrapper>
    );
  }
}

export default CardList;
