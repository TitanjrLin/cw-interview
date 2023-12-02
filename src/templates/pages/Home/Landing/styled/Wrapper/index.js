import styled from 'styled-components';
import { bpts } from '../../../../../../components/styled/RWDStyle';
import ImgBackground from '../../../../../../assets/images/vision/background.jpg';

const Wrapper = styled.section`
  height: 56.25rem;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ImgBackground});
  overflow: hidden;

  @media (max-width: ${bpts.medium}) {
    height: 46.643rem;
    background-color: lightgray;
    background-image: linear-gradient(
      0deg,
      #EFF8F9 0%,
      rgba(242, 249, 250, 0.85) 21.89%,
      rgba(255, 255, 255, 0.00) 57.94%),
      url(${ImgBackground});
    background-position-x: 31.75%;
    background-position-y: center;
  }
`;

export default Wrapper;