import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css';

class ListItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <Link className={styles.link} to={`/gauge/${this.props.id}`} onClick={() => this.props.onGaugeClick(this.props.id)}>
          <h2 className={styles.title}>{this.props.name}</h2>
        </Link>
      </li>
    );
  }
}

export default ListItem;
