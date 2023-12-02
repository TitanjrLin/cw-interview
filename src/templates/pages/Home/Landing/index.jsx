import React from 'react';
import ScrollDown from './ScrollDown';
import {
  Actions, TitleWrapper, TitleImage,
  Wrapper,
} from './styled';

class Landing extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <TitleImage />
        </TitleWrapper>
        <Actions>
          <ScrollDown />
        </Actions>
      </Wrapper>
    );
  }
}

export default Landing;
