import React from 'react';
import styles from './Popup.module.css';

class Popup extends React.Component {

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={this.props.closePopup}>
            <svg 
              className={styles.svg} 
              viewBox="0 0 4.8001036 4.8001038" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                className={styles.cross} 
                d="M5.8708867 5.8396368 2.1291133 2.0978634M2.1291133 5.8396367l3.7417734-3.7417734" 
                transform="translate(-1.5999483 -1.5686983)"/>
            </svg>
          </button>
          <div className={styles.content}>{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Popup;
