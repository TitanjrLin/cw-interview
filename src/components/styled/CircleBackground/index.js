import { css } from 'styled-components';
import ImgBgCircle from '../../../assets/images/bg-circle.svg';

const CBG = css`
  background-image: url(${ImgBgCircle});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CssLongTermCareCBGDesktop = css`
  ${CBG}
  background-size: 1271px auto;
`;

export const CssLongTermCareCBGMobile = css`
  ${CBG}
  background-size: 339% auto;
`;
