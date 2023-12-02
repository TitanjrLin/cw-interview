import React from 'react';
import styled from 'styled-components';
import ImageComp from './Image';
import { Wrapper, TipTitle, TipContent } from '../styled/card';
import ATScale from '../../../../../../../components/styled/Animations/Scale';

const Image = styled(ImageComp)`
  animation-name: ${ATScale};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;

class LongTermServiceStep1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Image />
        <TipTitle>TIPS 1</TipTitle>
        <TipContent>透過左上角篩選功能，找到適合的服務機構</TipContent>
      </Wrapper>
    );
  }
}

export default LongTermServiceStep1;
