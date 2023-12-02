import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.071rem;
  text-align: center;
  border-top: 1px solid #CADEDF;
  line-height: 1.5;
  font-size: 0.928rem;
  color: #707070;
`;

const FooterLink = styled.a`
  text-decoration: underline;
`;

class AppFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Wrapper id="Footer">
        <div>Copyright © 2023 天下數位發展部及整合傳播部企劃製作</div>
        <div>All rights reserved. 版權所有，禁止擅自轉貼節錄</div>
        <div>
          <FooterLink>隱私權政策</FooterLink>
        </div>
      </Wrapper>
    );
  }
}

export default AppFooter;
