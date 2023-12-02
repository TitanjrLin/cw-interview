import styled from 'styled-components';
import { bpts } from '../../../../../../components/styled/RWDStyle';

const Block = styled.div`
  width: 100%;
  max-width: 65.375rem;
  margin: auto;

  @media (max-width: ${bpts.medium}) {
    max-width: initial;
  }
`;

export default Block;
