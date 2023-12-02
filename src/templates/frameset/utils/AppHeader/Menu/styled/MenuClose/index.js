import styled from 'styled-components';
import { bpts } from '../../../../../../../components/styled/RWDStyle';

const style = styled.div`
  padding: 1.142rem;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  display: none;
  background: none;
  font-size: 1.714rem;
  color: #008088;

  @media (max-width: ${bpts.medium}) {
    display: block;
  }
`;

export default style;
