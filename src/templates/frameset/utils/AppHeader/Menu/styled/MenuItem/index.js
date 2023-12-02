import styled from 'styled-components';
import { bpts } from '../../../../../../../components/styled/RWDStyle';
import ImgMenuLine from '../../../../../../../assets/images/menu/menu-line.svg';

const style = styled.div`
  padding: 0 1.5rem;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;

  label {
    position: relative;
    white-space: nowrap;
  }

  &:hover, &:active {
    color: #EC6C00;
  }

  &:not(:first-child) {
    border-width: 0 0 0 1px;
    border-color: #E4E4E4;
    border-style: solid;

    @media (max-width: ${bpts.medium}) {
      border-width: 1px 0 0;
    }
  }

  @media (min-width: ${bpts.medium}) {
    &:hover label::after {
      content: '';
      margin: auto;
      height: 2px;
      position: absolute;
      right: 0;
      bottom: -0.25rem;
      left: 0;
      display: block;
      background-image: url(${ImgMenuLine});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

export default style;
