import React from 'react';
import leaflet from 'leaflet';
import styles from './LeafletMap.module.css';

class LeafletMap extends React.Component {
  state = {
    map: null
  }

  createMap() {
    const opts = this.props.gauges !== null ? {center: [47.2,47.2], zoom: 7} : {center: [this.props.lon, this.props.lat], zoom: 10}
    return leaflet.map('map',opts)
  }

  componentDidMount() {
    const m = this.createMap()
    this.setState({map: m})
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
    if ( this.props.gauges ) {
      this.props.gauges.map((gauge) => {
        return leaflet.marker([gauge['lat'], gauge['lon']]).bindPopup(gauge['name']).addTo(m)
      })
    } else {
      return leaflet.marker([this.props.lon, this.props.lat]).bindPopup(this.props.name).addTo(m)
    }
  }

  componentDidUpdate() {
    this.props.gauges.map((gauge) => {
      return leaflet.marker([gauge['lat'], gauge['lon']]).bindPopup(gauge['name']).addTo(this.state.map)
    })
  }

  render() {
    return (
      <div id='map' className={styles.map}></div>
    );
  }
}

export default LeafletMap;
