import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &:not(:first-child) {
    margin-left: 12px;
  }
`;

const ActionDot = styled(Dot)`
  background-color: #EC6C00;
`;

const StayDot = styled(Dot)`
  border: 1px solid #CADEDF;
`;

class Pagination extends React.Component {
  static propTypes = {
    current: PropTypes.number,
    dataset: PropTypes.array,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderDot = (data, index) => {
    const { current } = this.props;
    const isCurrent = index === current;
    const Component = isCurrent ? ActionDot : StayDot;
    return (
      <Component key={`pagination-${data.id}`} />
    );
  };

  render() {
    const { className, dataset } = this.props;
    return (
      <Wrapper
        className={className}
      >
        {dataset.map(this.renderDot)}
      </Wrapper>
    );
  }
}

export default Pagination;
