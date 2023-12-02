import React from 'react';
import styled from 'styled-components';
import ImgTarget from '../../../../assets/images/long-term-care/avatar-target.jpg';
import ImgFlow from '../../../../assets/images/long-term-care/avatar-flow.jpg';
import ImgContent from '../../../../assets/images/long-term-care/avatar-content.jpg';
import ImgDialog from '../../../../assets/images/dialog-long.svg';
import LTCIcon from '../../../../components/atoms/LongTermCareIcon';
import { bpts } from '../../../../components/styled/RWDStyle';
import Header from '../utils/Header';
import LTCCard from './LTCCard';
import LTCButton from '../../../../components/atoms/LongTermCareButton';
import {
  CssLongTermCareCBGDesktop,
  CssLongTermCareCBGMobile,
} from '../../../../components/styled/CircleBackground';

const Wrapper = styled.section`
  padding-top: 7.5rem;

  @media (max-width: ${bpts.medium}) {
    padding-top: 4rem;
  }
`;

const LTCCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  
  @media (max-width: ${bpts.medium}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const LTCCardWrapper = styled.div`
  display: flex;
  justify-content: center;

  &:nth-child(2) {
    margin-top: -2.5rem;
  }

  @media (max-width: ${bpts.medium}) {
    padding: 0 3rem;

    &:first-child {
      ${CssLongTermCareCBGMobile}
      background-position: center 4.5rem;
    }

    &:nth-child(2) {
      margin-top: 0;
    }

    &:not(:first-child) {
      padding-top: 1.7857rem;
      background-color: rgba(202, 222, 223, 0.2);
    }
  }
`;

const LTCCardContent = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.7;
  text-align: justify;
  letter-spacing: 0.035rem;
`;

const LTCCardFlowList = styled.ul`
  margin-top: 0.25rem;
  list-style: none;
`;

const LTCCardFlowItem = styled.li`
  padding-left: 1.25rem;
  font-size: 0.875rem;
  text-indent: -0.57rem;
  line-height: 1.4;

  &:not(:first-child) {
    margin-top: 0.3125rem;
  }
`;

const LTCListIcon = styled(LTCIcon)`
  margin-right: 0.25rem;
  color: #008088;
  transform: scale(1.2);
`;

const LTCBody = styled.div`
  ${CssLongTermCareCBGDesktop}
  background-position: center 2rem;

  @media (max-width: ${bpts.medium}) {
    background: none;
  }
`;

const LTCMain = styled.div`
  max-width: 53.125rem;
  margin: auto;
  margin-top: 4.625rem;
  padding: 0 3rem;

  @media (max-width: ${bpts.medium}) {
    margin-top: 2.42857rem;
    padding: 0;
  }
`;

const LTCFooter = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${bpts.medium}) {
    padding-top: 3.5714rem;
    justify-content: center;
    background-color: rgba(202, 222, 223, 0.2);
  }
`;

const LTCFooterLeft = styled.div`
  margin-right: 5rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${bpts.medium}) {
    display: none;
  }
`;

const LTCFooterRight = styled.div`
  flex-shrink: 0;
`;

const LTCDialog = styled.img`
  transform: translateY(100%);
`;

const LTC20Button = styled(LTCButton)`
  min-width: 20.625rem;

  @media (max-width: ${bpts.medium}) {
    min-width: 19.214rem;
  }
`;

const HeightLight = styled.span`
  color: #008088;
  font-weight: 700;
`;

class LongTermCare extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper id="LongTermCare">
        <Header
          title="5分鐘一看就懂"
          slogan="長照2.0"
          subHeading="LTCS KNOWLEDGE"
        />
        <LTCBody>
          <LTCMain>
            <LTCCards>
              <LTCCardWrapper>
                <LTCCard
                  title="服務對象"
                  avatar={ImgTarget}
                >
                  <LTCCardContent>經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。</LTCCardContent>
                </LTCCard>
              </LTCCardWrapper>
              <LTCCardWrapper>
                <LTCCard
                  title="申請流程"
                  avatar={ImgFlow}
                >
                  <LTCCardFlowList>
                    <LTCCardFlowItem>
                      <LTCListIcon type="number-1" />
                      <span>直接撥打</span>
                      <HeightLight>長照專線1966</HeightLight>
                    </LTCCardFlowItem>
                    <LTCCardFlowItem>
                      <LTCListIcon type="number-2" />
                      <span>聯絡當地長期照顧管理中心</span>
                    </LTCCardFlowItem>
                    <LTCCardFlowItem>
                      <LTCListIcon type="number-3" />
                      <span>住院期間聯絡出院準備銜接長照服務小組或是線上申請</span>
                    </LTCCardFlowItem>
                  </LTCCardFlowList>
                </LTCCard>
              </LTCCardWrapper>
              <LTCCardWrapper>
                <LTCCard
                  title="服務內容"
                  avatar={ImgContent}
                >
                  <LTCCardContent>依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。</LTCCardContent>
                </LTCCard>
              </LTCCardWrapper>
            </LTCCards>
            <LTCFooter>
              <LTCFooterLeft>
                <LTCDialog src={ImgDialog} />
              </LTCFooterLeft>
              <LTCFooterRight>
                <LTC20Button
                  title="了解更多長照2.0"
                />
              </LTCFooterRight>
            </LTCFooter>
          </LTCMain>
        </LTCBody>
      </Wrapper>
    );
  }
}

export default LongTermCare;
