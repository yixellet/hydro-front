import React from 'react';
import styles from './List.module.css';

class List extends React.Component {

  render() {
    return (
      <ul className={styles.list}>
        {this.props.header}
        {
          this.props.list((item) => {
            return <li className={styles.item} key={item.ecx}><span className={styles.elevation}>{item.stage}</span>{item.description}</li>
          })
        }
      </ul>
    );
  }
}

export default List;
