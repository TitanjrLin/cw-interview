import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bpts } from '../../styled/RWDStyle';
import SubHeadingLine from '../../../assets/images/sub-heading-line.svg';

const Wrapper = styled.div`
  font-family: Lato;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  color: #008088;
  letter-spacing: 0.286rem;
  user-select: none;
`;

const UnderLine = styled.div`
  height: 1px;
  margin-top: 0.5rem;
  background-image: url(${SubHeadingLine});
  background-position: top left;
  background-repeat: no-repeat;
  writing-mode: inherit;

  @media (min-width: ${bpts.medium}) {
    margin-top: 0.5714rem;
  }
`;

const SubHeading = (props) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      {props.children}
      <UnderLine />
    </Wrapper>
  );
};

SubHeading.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default SubHeading;
