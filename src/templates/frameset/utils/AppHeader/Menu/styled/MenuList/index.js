import styled from 'styled-components';
import { bpts } from '../../../../../../../components/styled/RWDStyle';

const style = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  list-style: none;

  @media (max-width: ${bpts.medium}) {
    display: block;
    font-size: 1.714rem;
    line-height: 3;
  }
`;

export default style;
