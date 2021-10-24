import React from 'react';
import leaflet from 'leaflet';
import styles from './Marker.module.css';

class Marker extends React.Component {
  state = {
    isSelected: null
  }
  render() {
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default Marker;
