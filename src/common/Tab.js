import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let classNameName = 'tab-list-item';

    if (activeTab === label) {
      classNameName += ' tab-list-active';
    }

    return (
      <li
        classNameName={classNameName}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;