import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LongTermCareIcon extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { type } = this.props;
    const className = classNames(
      this.props.className,
      'ltcif',
      `ltcif-${type}`,
    );
    return (
      <i className={className} />
    );
  }
}

export default LongTermCareIcon;
