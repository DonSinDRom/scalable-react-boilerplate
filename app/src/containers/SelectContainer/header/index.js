// @flow
import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { list, value, onChange } = this.props;
    return (
      <nav className={styles.nav} ref={(nav) => { this.nav = nav; }}>
        {list.map((el) => {
          const activeClassName = value && el.name.includes(value) ? styles.nav__itemActive : '';
          const className = `${styles.nav__item} ${activeClassName}`;
          return (
            <button
              key={el.name}
              className={className}
              onClick={() => onChange(el.name)}
            >
              <img className={styles.nav__image} src={el.image} alt={el.name} />
              <span className={styles.nav__title}>{el.name}</span>
            </button>
          );
        })}
      </nav>
    );
  }
}

Header.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default cssModules(Header, styles);
