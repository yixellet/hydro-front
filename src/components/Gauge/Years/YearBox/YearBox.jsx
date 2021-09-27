import React from 'react';
import styles from './YearBox.module.css';

class YearBox extends React.Component {
  render() {
    return (
        <div className={this.props.full ? styles.box_full : styles.box}></div>
    );
  }
}

export default YearBox;
