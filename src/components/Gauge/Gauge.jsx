import React from 'react';
import Years from './Years/Years';
import dateToStr from '../../utils/dates';
import styles from './Gauge.module.css';

class Gauge extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <article className={styles.content}>
          <h1 className={styles.title}>{this.props.info.name}</h1>
          <p className={styles.river}>({this.props.info.river})</p>
          <p className={styles.code}>{this.props.info.code}</p>
          <ul className={styles.zero}>Абсолютная отметка нуля:
            {
              this.props.info.refElevs.map((elev, idx) => {
                return <li key={idx} className={styles.zero_item}>
                  <span className={styles.elev}>{elev.elev}</span> (с {dateToStr(elev.startDate)}{elev.endDate ? ' по ' + dateToStr(elev.endDate) : null})
                </li>
              })
            }
          </ul>
          <Years />
        </article>
      </main>
    );
  }
}

export default Gauge;
