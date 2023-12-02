import { createGlobalStyle } from 'styled-components';
import bpts from './breakpoints';

const RWDStyle = createGlobalStyle`
  html {
    font-size: 14px;

    @media (min-width: ${bpts.medium}) {
      font-size: 15px;
    }

    @media (min-width: ${bpts.large}) {
      font-size: 16px;
    }
  }
`;

export default RWDStyle;
export {
  bpts,
};
