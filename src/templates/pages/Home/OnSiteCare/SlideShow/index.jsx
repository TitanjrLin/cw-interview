import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import IconArrowRight from '../../../../../assets/images/arrow-right.svg';
import ImgDialog from '../../../../../assets/images/dialog.svg';
import { Autoplay, Swiper, SwiperSlide } from '../../../../../plugins/swiper';
import { bpts } from '../../../../../components/styled/RWDStyle';
import dataset from './dataset';
import PaginationComp from './Pagination';
import Slide from './Slide';

const Wrapper = styled.div`
  margin-top: 2.125rem;
  margin-left: 2.5rem;
  position: relative;
  border-top-left-radius: 2rem;
  overflow: hidden;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1.714rem;
    margin-left: 1.714rem;
    padding-bottom: 1.8rem;
  }

  .swiper-slide {
    width: 70%;

    @media (max-width: ${bpts.medium}) {
      width: 92%;
    }
  }
`;

const Slider = styled.div`
  position: relative;
`;

const SlideMain = styled.div`
  height: 13.2rem;
  pointer-events: none;

  @media (min-width: ${bpts.medium}) {
    height: auto;
    margin-left: 12.857%;
    margin-bottom: 4.286%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;
  }
`;

const Content = styled.div`
  color: #FFFFFF;
  white-space: pre-line;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: ${bpts.medium}) {
    color: #222222;
    text-shadow: none;
  }
`;

const ContentTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1rem;
    font-size: 1.428rem;
  }
`;

const ContentSubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

const ContentFooter = styled.img`
  margin-top: 1.5rem;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1rem;
  }
`;

const Pagination = styled(PaginationComp)`
  margin-top: 2.5rem;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1.1428rem;
  }
`;

const NextButton = styled.button`
  width: 4rem;
  padding: 0;
  position: absolute;
  top: 50%;
  right: calc(30% - 5rem);
  z-index: 12;
  border: 0;
  background: none;
  transform: translate(2.5rem, -50%);

  @media (max-width: ${bpts.medium}) {
    width: 2.2857rem;
    right: calc(8% + 1.2rem);
    transform: translate(0.6rem, -50%);
  }
`;

class SlideShow extends React.Component {
  constructor(props) {
    super(props);

    this.swiper = null;

    this.state = {
      dataset,
      current: 0,
    };
  }

  isCurrent = (index) => {
    const { swiper } = this;
    const current = _.get(swiper, 'realIndex', 0);
    return index === current;
  };

  onSwiper = (swiper) => {
    this.swiper = swiper;
  };

  onSlideChange = (swiper) => {
    const index = _.get(swiper, 'realIndex', 0);
    this.setState({ current: index });
  };

  onSlideClick = (url) => {
    if (_.isEmpty(url)) return;
    window.open(url, '_blank');
  };

  onNextClick = () => {
    const { swiper } = this;
    swiper.slideNext();
  };

  renderSlide = (data, index) => {
    const { id } = data;
    const isCurrent = this.isCurrent(index);
    return (
      <SwiperSlide key={id}>
        <Slide
          dataset={data}
          isCurrent={isCurrent}
        />
      </SwiperSlide>
    );
  };

  renderContent = () => {
    const { current, dataset } = this.state;
    const data = dataset[current];
    const title = _.get(data, 'title');
    const subtitle = _.get(data, 'subtitle');
    return (
      <Content>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubTitle>{subtitle}</ContentSubTitle>
        <ContentFooter src={ImgDialog} />
      </Content>
    );
  };

  render() {
    const { current, dataset } = this.state;
    return (
      <Wrapper>
        <Slider>
          <Swiper
            modules={[Autoplay]}
            autoplay={true}
            lazy="true"
            loop={true}
            slidesPerView={'auto'}
            onSwiper={this.onSwiper}
            onSlideChange={this.onSlideChange}
          >
            {dataset.map(this.renderSlide)}
          </Swiper>
          <NextButton
            onClick={this.onNextClick}
          >
            <img src={IconArrowRight} />
          </NextButton>
        </Slider>
        <SlideMain>
          {this.renderContent()}
          <Pagination
            current={current}
            dataset={dataset}
          />
        </SlideMain>

      </Wrapper>
    );
  }
}

export default SlideShow;
