import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css';

class ListItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <Link className={styles.link} 
              to={`/gauge/${this.props.code}`} 
              onClick={() => this.props.onGaugeClick(this.props.code)}>
          <h2 className={styles.title}>{this.props.name}</h2>
        </Link>
      </li>
    );
  }
}

export default ListItem;
