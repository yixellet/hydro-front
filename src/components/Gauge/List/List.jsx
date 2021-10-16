import React from 'react';
import { dateToStr } from '../../../utils/dates';
import styles from './List.module.css';

class List extends React.Component {
  /**
  * Перечень значений на странице гидропоста
  */
  render() {
    return (
      <ul className={styles.list}>
        {this.props.header}
        {
          this.props.list ?
          this.props.list.map((item, idx) => {
            return <li className={styles.item} key={idx}>
              <span className={styles.elevation}>{item.stage ? item.stage.toFixed(2) : '....'}
              {item.elev ? item.elev.toFixed(2) : null}</span>
              {item.desc ? item.desc : null} {item.date ? '('+dateToStr(item.date, 'word')+')' : null}
            </li>
          }) :
          this.props.elevs.map((elev, idx) => {
            return <li className={styles.item} key={idx}>
              <span className={styles.elevation}>{elev.elev.toFixed(2)}</span>
              (с {dateToStr(elev.startDate, 'word')} по {elev.endDate ? dateToStr(elev.endDate, 'word') : 'настоящее время'})
            </li>
          })
        }
      </ul>
    );
  }
}

export default List;
