import React from 'react';
import leaflet from 'leaflet';
import styles from './LeafletMap.module.css';

class LeafletMap extends React.Component {

  componentDidMount() {    
    const map = leaflet.map('map').setView([47.2,47.2], 7)
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    this.props.gauges.map((gauge) => {
      return leaflet.marker([gauge['lat'], gauge['lon']]).addTo(map)
        .bindPopup(gauge['name'])
    })    
  }

  render() {    
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default LeafletMap;
