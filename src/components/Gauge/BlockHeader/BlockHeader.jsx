import React from 'react';
import styles from './BlockHeader.module.css';

class BlockHeader extends React.Component {

  render() {
    return (
      <h2 className={styles.blockHeader}>{this.props.header}</h2>
    );
  }
}

export default BlockHeader;
