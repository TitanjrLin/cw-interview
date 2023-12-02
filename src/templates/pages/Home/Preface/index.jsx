import React from 'react';
import styled from 'styled-components';
import ImgPreface from '../../../../assets/images/preface/image.png';
import ImgParagraphLine from '../../../../assets/images/preface/paragraph-line.svg';
import { bpts } from '../../../../components/styled/RWDStyle';
import SubHeading from '../../../../components/atoms/SubHeading';
import { Block } from '../utils/styled';

const Wrapper = styled(Block)`
  padding: 7.5rem 2.5rem 1.75rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${bpts.medium}) {
    padding: 4rem 1.714rem;
  }
`;

const LeftSide = styled.div`
  margin-right: 8.125rem;
  line-height: 1.4;
  flex-grow: 1;

  @media (max-width: ${bpts.medium}) {
    display: none;
  }
`;

const RightSide = styled.div`
  width: 26.875rem;
  margin: 3rem 0 0;
  padding-bottom: 5rem;
  position: relative;
  flex-shrink: 0;

  @media (max-width: ${bpts.medium}) {
    margin: 0;
    width: 100%;
    padding-bottom: 2.857rem;
  }
`;

const Photo = styled.img`
  width: 25.375rem;
  max-width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #008088;

  @media (max-width: ${bpts.medium}) {
    font-size: 1.714rem;
  }
`;

const SubTitle = styled(SubHeading)`
  position: absolute;
  top: -0.7rem;
  left: -2rem;
  font-weight: 300;
  transform: rotate(90deg);
  transform-origin: top left;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1.1428rem;
    position: static;
    transform: unset;
  }
`;

const Content = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.9;
  letter-spacing: 0.1rem;

  @media (max-width: ${bpts.medium}) {
    margin-top: 1.1428rem;
  }
`;

const ParagraphLine = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

class Preface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper id="Preface">
        <LeftSide
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="400"
        >
          <Photo src={ImgPreface} />
        </LeftSide>
        <RightSide
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="400"
        >
          <Title>
            <span>長照2.0，</span>
            <br />
            <span>讓照顧的路上有專業相挺</span>
          </Title>
          <SubTitle>LONG TERM CARE SERVICES</SubTitle>
          <Content>
            <p>台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。</p>
            <p>老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。</p>
            <p>「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。</p>
            <br />
            <p>面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！</p>
          </Content>
          <ParagraphLine src={ImgParagraphLine} />
        </RightSide>
      </Wrapper>
    );
  }
}

export default Preface;
