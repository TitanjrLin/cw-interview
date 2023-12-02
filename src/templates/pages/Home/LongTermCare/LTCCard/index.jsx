import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bpts } from '../../../../../components/styled/RWDStyle';
import Avatar from './Avatar';

const Wrapper = styled.div`
  max-width: 21.375rem;
  width: 100%;

  @media (max-width: ${bpts.medium}) {
    max-width: 23.3571rem;
  }
`;

const AvatarWrapper = styled.div`
  width: 13.125rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const Title = styled.div`
  margin-top: 1rem;
  font-size: 1.26rem;
  font-weight: 700;
  line-height: 1.4;
  color: #008088;
  letter-spacing: 0.125rem; 
`;

const CardBody = styled.div`
`;

class LTCCard extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    avatar: PropTypes.string,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { avatar, title } = this.props;
    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar src={avatar} />
        </AvatarWrapper>
        <Title>{title}</Title>
        <CardBody>
          {this.props.children}
        </CardBody>
      </Wrapper>
    );
  }
}

export default LTCCard;
