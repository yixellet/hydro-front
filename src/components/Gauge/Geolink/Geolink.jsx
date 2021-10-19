import React from 'react';
import ddToDms from '../../../utils/ddToDms';
import styles from './Geolink.module.css';

class Geolink extends React.Component {

  render() {
    return (
      <a className={styles.coordsBlock} 
        href={`https://google.com/maps/place/${this.props.lat},${this.props.lon}`} 
        target="_blank" rel="noreferrer noopener">
        <svg width="25" height="25" 
          viewBox="0 0 7.937 7.938" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.path} 
            d="M3.969 0C0 0 2.875 5.33 3.969 7.938 5.062 5.33 7.938 0 3.969 0Z"/>
          <circle className={styles.circle} cx="3.969" cy="2.106" r="1.196"/>
        </svg>
        <p className={styles.coord}>{ddToDms(this.props.lat)} СШ</p>
        <p className={styles.coord}>{ddToDms(this.props.lon)} ВД</p>
      </a>
    );
  }
}

export default Geolink;
