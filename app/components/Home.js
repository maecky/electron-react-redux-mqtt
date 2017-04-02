// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

import Test from './Test';


export default class Home extends Component {
  render() {
    console.log('============================================ RENDERING');
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Test />
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
