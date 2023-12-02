import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppHeader from '../utils/AppHeader';
import AppBody from '../utils/AppBody';
import AppFooter from '../utils/AppFooter';

const Wrapper = styled.div`
  width: 100%;
`;

const MainHeader = styled(AppHeader)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const MainFrame = (props) => {
  return (
    <Wrapper>
      <MainHeader />
      <AppBody>
        {props.children}
      </AppBody>
      <AppFooter />
    </Wrapper>
  );
};

MainFrame.propTypes = {
  children: PropTypes.any,
};

export default MainFrame;
