import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
`;

const AppBody = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

AppBody.propTypes = {
  children: PropTypes.any,
};

export default AppBody;
