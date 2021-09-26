import React from 'react';
import extr from '../../../utils/extrSimDates';
import styles from './Popup.module.css';

class Popup extends React.Component {

  render() {
    const months = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
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
          <div className={styles.content}>
            <table className={styles.table}>
              <caption className={styles.header}>
                <h3 className={styles.title}>{this.props.name} - {this.props.stream}</h3>
                <div className={styles.info}>
                  <p className={styles.text}>{this.props.year} г.</p>
                </div>
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
                      <td>{day}</td>
                      {
                        extr(this.props.data, day).map((d, idx) => {
                          return <td key={idx}>{d['value']}</td>
                        })
                      }
                    </tr>
                  })
                }
              </tbody>
            </table>
            <div className={styles.buttonBlock}>
              <button className={styles.button}>Сохранить CSV</button>
              <button className={styles.button}>Сохранить PDF</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
