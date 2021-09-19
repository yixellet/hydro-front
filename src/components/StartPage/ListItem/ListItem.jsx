import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css';

class ListItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <Link className={styles.link} to="/gauge">
          <h2 className={styles.title}>{this.props.name}</h2>
        </Link>
        {/*}
        <button className={styles.button}>
          <svg 
            width="12.301" 
            height="6.725" 
            viewBox="0 0 3.255 1.779" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              className={styles.svg} 
              d="m9.103 15.494-5.66-9.803h11.32z" 
              transform="matrix(.26458 0 0 .16701 -.781 -.903)"/>
          </svg>
        </button>
        */}
      </li>
    );
  }
}

export default ListItem;
