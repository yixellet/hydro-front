import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Link className={styles.link} to="/">
          <h1 className={styles.title}>{this.props.title}</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
