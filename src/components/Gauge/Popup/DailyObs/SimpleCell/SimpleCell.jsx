import React from 'react';
import styles from './SimpleCell.module.css';

class SimpleCell extends React.Component {
  render() {
    return (
      <td onMouseEnter={() => this.props.onHover(this.props.date)} className={styles.simpleCell}>{this.props.content ? Number(this.props.content).toFixed(2) : ''}</td>
    );
  }
}

export default SimpleCell;
