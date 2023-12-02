import React from 'react';
import styled from 'styled-components';
import ImgStep3 from '../../../../../../../assets/images/long-term-care-map/step3.svg';
import ATScale from '../../../../../../../components/styled/Animations/Scale';
import {
  Wrapper, TipImage, TipContent,
  TipTitle,
} from '../styled/card';

const Image = styled(TipImage)`
  animation-name: ${ATScale};
  animation-delay: 2s;
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;

class LongTermServiceStep3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Image src={ImgStep3} />
        <TipTitle>TIPS 3</TipTitle>
        <TipContent>點選下方篩選列表，觀看更詳細的聯絡資訊</TipContent>
      </Wrapper>
    );
  }
}

export default LongTermServiceStep3;
