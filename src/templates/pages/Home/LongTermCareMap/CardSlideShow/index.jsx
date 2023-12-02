import React from 'react';
import styled from 'styled-components';
import {
  Autoplay, EffectFade, Swiper,
  SwiperSlide, Virtual,
} from '../../../../../plugins/swiper.js';
import CardStep1 from '../utils/Cards/Step1';
import CardStep2 from '../utils/Cards/Step2';
import CardStep3 from '../utils/Cards/Step3';

const Wrapper = styled.div`
  width: 16.4285rem;
  margin: auto;
`;

class CardSlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Swiper
          modules={[Autoplay, EffectFade, Virtual]}
          autoplay={true}
          effect="fade"
          lazy="true"
          loop={true}
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <CardStep1 />
          </SwiperSlide>
          <SwiperSlide>
            <CardStep2 />
          </SwiperSlide>
          <SwiperSlide>
            <CardStep3 />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    );
  }
}

export default CardSlideShow;
