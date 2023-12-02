import styled from 'styled-components';
import { bpts } from '../../../../../../../components/styled/RWDStyle';

const style = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: 0;

  @media (max-width: ${bpts.medium}) {
    display: flex;
  }
`;

export default style;
