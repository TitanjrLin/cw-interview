import styled from 'styled-components';
import { bpts } from '../../../../../../components/styled/RWDStyle';
import ImgTitleDesktop from '../../../../../../assets/images/vision/title-desktop.svg';
import ImgTitleMobile from '../../../../../../assets/images/vision/title-mobile.svg';

const Component = styled.div`
  padding-top: 37.373%;
  background-image: url(${ImgTitleDesktop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: ${bpts.medium}) {
    padding-top: 51.376%;
    background-image: url(${ImgTitleMobile});
  }
`;

export default Component;
