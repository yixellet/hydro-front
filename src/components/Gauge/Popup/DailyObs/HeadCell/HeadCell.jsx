import React from 'react';
import styles from './HeadCell.module.css';

class HeadCell extends React.Component {
  render() {
    return (
      <th className={this.props.hoveredStageMonth === this.props.id ? styles.headCell_hover : styles.headCell}>{this.props.content}</th>
    );
  }
}

export default HeadCell;
