import React from 'react';
import HeadCell from './HeadCell/HeadCell';
import SimpleCell from './SimpleCell/SimpleCell';
import extr from '../../../../utils/extrSimDates';
import { dateToStr, extractMonth } from '../../../../utils/dates';
import { calcMax, calcMin, calcAverage } from '../../../../utils/computeStages';
import styles from './DailyObs.module.css';

class DailyObs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredStageDate: null,
      hoveredStageMonth: null
    }
    this.handleHoverStage = this.handleHoverStage.bind(this)
  }

  handleHoverStage(date) {
    const d = new Date(date)
    this.setState({
      hoveredStageDate: d.getDate(),
      hoveredStageMonth: d.getMonth()
    })
  }

  render() {
    const months = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const maxAnnual = calcMax(this.props.data)
    const minAnnual = calcMin(this.props.data)
    return (
      <>
        <div className={styles.info_block}>
          <div className={styles.textBlock}>
              <h3 className={styles.river}>{this.props.name} - {this.props.stream}</h3>
              <p className={styles.year}>{this.props.year} г.</p>
              <p className={styles.calcText}>Высший уровень  
              <span className={styles.calcValue}>{maxAnnual['stage'].toFixed(2)}</span> ({dateToStr(maxAnnual['date'], 'dots')})
              </p>
              <p className={styles.calcText}>Низший уровень  
              <span className={styles.calcValue}>{minAnnual['stage'].toFixed(2)}</span> ({dateToStr(minAnnual['date'], 'dots')})
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
              <HeadCell content={'Число'}/>
              {
                  months.map((month, idx) => {
                    return <HeadCell id={idx} key={idx} content={month} hoveredStageMonth={this.state.hoveredStageMonth} />
                  })
              }
              </tr>
          </thead>
          <tbody className={styles.tbody}>
              {
              days.map((day, idx) => {
                return <tr key={idx} className={styles.tbodyRow}>
                  <HeadCell id={day} key={idx} content={day} hoveredStageMonth={this.state.hoveredStageDate} />
                  {
                    extr(this.props.data, day).map((d, idx) => {
                      return <SimpleCell key={idx} date={d['date']} content={d['stage']} props={d['props']} onHover={this.handleHoverStage} />
                    })
                  }
                </tr>
              })
              }
          </tbody>
          
          <tfoot className={styles.tfoot}>
              <tr>
              <HeadCell content={'Высший'}/>
              {
                  months.map((item, idx) => {
                  return <SimpleCell key={idx} 
                                     content={calcMax(extractMonth(this.props.data, idx))['stage']} 
                                     date={calcMax(extractMonth(this.props.data, idx))['date']} 
                                     onHover={this.handleHoverStage} />
                  })
              }
              </tr>
              <tr>
              <HeadCell content={'Средний'}/>
              {
                  months.map((item, idx) => {
                  return <SimpleCell key={idx} content={calcAverage(extractMonth(this.props.data, idx))} onHover={this.handleHoverStage} />
                  })
              }
              </tr>
              <tr>
              <HeadCell content={'Низший'}/>
              {
                  months.map((item, idx) => {
                  return <SimpleCell key={idx} 
                                     content={calcMin(extractMonth(this.props.data, idx))['stage']}
                                     date={calcMin(extractMonth(this.props.data, idx))['date']}
                                     onHover={this.handleHoverStage} />
                  })
              }
              </tr>
            </tfoot>
        </table>
      </>
    );
  }
}

export default DailyObs;
