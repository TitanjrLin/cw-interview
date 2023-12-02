import styled from 'styled-components';
import { bpts } from '../../../../../../../components/styled/RWDStyle';

const style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${bpts.medium}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${(props) => (props.open ? 'flex' : 'none')};
    background-color: #FFFFFF;
  }
`;

export default style;
