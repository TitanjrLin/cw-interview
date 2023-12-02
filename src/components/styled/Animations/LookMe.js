import { keyframes } from 'styled-components';

const clip = keyframes`
  0% { transform: translateY(0); }
  30% { transform: translateY(-3%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(0); }
`;

export default clip;
