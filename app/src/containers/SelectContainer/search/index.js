// @flow
import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Search extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(value) {
    const { onChange } = this.props;
    this.setState({
      value,
    });
    onChange(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className={styles.search}>
        <div className={styles.search__front}>
          icon
        </div>
        <div className={styles.search__back}>
          <input
            value={value}
            onChange={ev => this.handleChange(ev.target.value)}
            placeholder="Search"
            className={styles.search__input}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default cssModules(Search, styles);
