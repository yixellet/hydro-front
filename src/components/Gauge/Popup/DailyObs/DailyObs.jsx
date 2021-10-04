import React from 'react';
import extr from '../../../utils/extrSimDates';
import { dateToStr, extractMonth } from '../../../utils/dates';
import { calcMax, calcMin, calcAverage } from '../../../utils/computeStages';
import styles from './DailyObs.module.css';

class DailyObs extends React.Component {

  render() {
    const months = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const maxAnnual = calcMax(this.props.data)
    const minAnnual = calcMin(this.props.data)
    return (
      <div className={styles.content}>
        <div className={styles.data}>
            <div className={styles.info_block}>
            <div className={styles.textBlock}>
                <h3 className={styles.river}>{this.props.name} - {this.props.stream}</h3>
                <p className={styles.year}>{this.props.year} г.</p>
                <p className={styles.calcText}>Высший уровень  
                <span className={styles.calcValue}>{maxAnnual['stage']}</span> ({dateToStr(maxAnnual['date'], 'dots')})
                </p>
                <p className={styles.calcText}>Низший уровень  
                <span className={styles.calcValue}>{minAnnual['stage']}</span> ({dateToStr(minAnnual['date'], 'dots')})
                </p>
            </div>
            <div className={styles.buttonBlock}>
                <button className={styles.button}>Сохранить CSV</button>
                <button className={styles.button}>Сохранить PDF</button>
            </div>
            </div>
            <table className={styles.table}>
            <caption className={styles.header}>
                <h3 className={styles.title}>Ежедневные уровни воды</h3>
            </caption>
            <thead className={styles.thead}>
                <tr>
                <th>Число</th>
                {
                    months.map((month, idx) => {
                    return <th key={idx}>{month}</th>
                    })
                }
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {
                days.map((day, idx) => {
                    return <tr key={idx} className={styles.tbodyRow}>
                    <th>{day}</th>
                    {
                        extr(this.props.data, day).map((d, idx) => {
                        return <td key={idx}>{d['stage']}</td>
                        })
                    }
                    </tr>
                })
                }
            </tbody>
            <tfoot className={styles.tfoot}>
                <tr>
                <th>Высший</th>
                {
                    months.map((item, idx) => {
                    return <td key={idx}>{calcMax(extractMonth(this.props.data, idx))['stage']}</td>
                    })
                }
                </tr>
                <tr>
                <th>Средний</th>
                {
                    months.map((item, idx) => {
                    return <td key={idx}>{calcAverage(extractMonth(this.props.data, idx))}</td>
                    })
                }
                </tr>
                <tr>
                <th>Низший</th>
                {
                    months.map((item, idx) => {
                    return <td key={idx}>{calcMin(extractMonth(this.props.data, idx))['stage']}</td>
                    })
                }
                </tr>
            </tfoot>
            </table>
        </div>
      </div>
    );
  }
}

export default DailyObs;
