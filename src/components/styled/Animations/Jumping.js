import { keyframes } from 'styled-components';

const clip = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-7%); }
  50% { transform: translateY(0%); }
  75% { transform: translateY(7%); }
  100% { transform: translateY(0); }
`;

export default clip;
