import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlideInner = styled.div`
  padding-top: 64.321%;
  position: relative;
  cursor: pointer;
  pointer-events: ${(props) => {
    const { status } = props;
    return status === 'action' ? 'auto' : 'none';
  }};
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

class Slide extends React.Component {
  static propTypes = {
    dataset: PropTypes.object.isRequired,
    isCurrent: PropTypes.bool,
  };

  static defaultProps = {
    isCurrent: false,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onClick = () => {
    const { dataset } = this.props;
    const url = _.get(dataset, 'url');
    if (_.isEmpty(url)) return;
    window.open(url, '_blank');
  };

  detectImageStyle = () => {
    const { dataset } = this.props;
    const source = _.get(dataset, 'source');
    const style = {
      backgroundImage: `url(${source})`,
    };
    return style;
  };

  detectStatus = () => {
    const { isCurrent } = this.props;
    return isCurrent ? 'action' : 'stay';
  };

  render() {
    const imgStyle = this.detectImageStyle();
    const status = this.detectStatus();
    return (
      <SlideInner
        status={status}
        onClick={this.onClick}
      >
        <SlideImage style={imgStyle} />
      </SlideInner>
    );
  }
}

export default Slide;
