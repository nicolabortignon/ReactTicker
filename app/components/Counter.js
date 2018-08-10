// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes.json';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  getStock: () => void,
  decrement: () => void,
  counter: number,
  stocks: object
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const {
      increment,
      incrementIfOdd,
      getStock,
      decrement,
      counter
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={increment}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={decrement}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>
          <button
            className={styles.btn}
            onClick={incrementIfOdd}
            data-tclass="btn"
            type="button"
          >
            odd
          </button>
          <button
            className={styles.btn}
            onClick={() => getStock()}
            data-tclass="btn"
            type="button"
          >
            async
          </button>
        </div>
      </div>
    );
  }
}
