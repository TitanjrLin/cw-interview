import React from 'react';
import styled from 'styled-components';
import ImgStep2 from '../../../../../../../assets/images/long-term-care-map/step2.svg';
import ATScale from '../../../../../../../components/styled/Animations/Scale';
import {
  Wrapper, TipImage, TipContent,
  TipTitle,
} from '../styled/card';

const Image = styled(TipImage)`
  animation-name: ${ATScale};
  animation-delay: 1s;
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;

class LongTermServiceStep2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Image src={ImgStep2} />
        <TipTitle>TIPS 2</TipTitle>
        <TipContent>直接點擊地圖，定位篩選出範圍內的相關服務機構</TipContent>
      </Wrapper>
    );
  }
}

export default LongTermServiceStep2;
