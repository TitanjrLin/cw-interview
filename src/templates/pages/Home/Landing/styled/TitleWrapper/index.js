import styled from 'styled-components';
import { bpts } from '../../../../../../components/styled/RWDStyle';
import ATLookMe from '../../../../../../components/styled/Animations/LookMe';

const Component = styled.div`
  width: 37.125rem;
  margin: 0 7rem 0 0;
  position: absolute;
  top: 14rem;
  right: 0;
  animation-name: ${ATLookMe};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${bpts.medium}) {
    width: auto;
    margin: 0;
    top: auto;
    right: 1.7142rem;
    bottom: 4.571rem;
    left: 1.7142rem;
  }
`;

export default Component;
