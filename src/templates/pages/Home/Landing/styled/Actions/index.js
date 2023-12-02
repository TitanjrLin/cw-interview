import styled from 'styled-components';
import { bpts } from '../../../../../../components/styled/RWDStyle';

const Actions = styled.div`
  position: absolute;
  left: 15.2777%;
  bottom: 5rem;

  @media (max-width: ${bpts.medium}) {
    display: none;
  }
`;

export default Actions;
