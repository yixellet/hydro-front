import React from 'react';
import dateToStr from '../../utils/dates';
import styles from './Gauge.module.css';

class Gauge extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>{this.props.info.name}</h1>
        <p>{this.props.info.code}</p>
        <p>{this.props.info.river}</p>
        <ul>Абсолютная отметка нуля:
          {
            this.props.info.refElevs.map((elev, idx) => {
              return <li key={idx}>
                <span>{elev.elev}</span> (с {dateToStr(elev.startDate)}{elev.endDate ? ' по ' + dateToStr(elev.endDate) : null})
              </li>
            })
          }
        </ul>
      </main>
    );
  }
}

export default Gauge;
