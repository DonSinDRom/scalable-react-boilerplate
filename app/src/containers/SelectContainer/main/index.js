// @flow
import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Main extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { list } = this.props;
    return (
      <main className={styles.main}>
        {list.map((el) => {
          return (
            <li
              key={el.key}
              className={styles.main__item}
            >
              <div className={styles.main__imageBox}>
                <img className={styles.main__image} src={el.image} alt={el.name} />
              </div>
              <span className={styles.main__title}>{el.name}</span>
            </li>

          );
        })}
      </main>
    );
  }
}

Main.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
      pantheon: PropTypes.string.isRequired,
      range: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default cssModules(Main, styles);
