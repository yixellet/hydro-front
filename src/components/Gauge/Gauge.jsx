import React from 'react';
import Form from './Form/Form';
import Map from '../Map/Map';
import Popup from './Popup/Popup';
import mapAstr from '../../images/map_Astr';
// import Years from './Years/Years';
import dateToStr from '../../utils/dates';
import styles from './Gauge.module.css';

class Gauge extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gaugeInfo: null
    }
  }
  componentDidMount() {
    console.log(this.props.gaugeId)
    this.props.api.getGauge(this.props.gaugeId)
      .then((data) => {
        this.setState({gaugeInfo: data})
      })
  }

  render() {
    return (
      <main className={styles.main}>
        <article className={styles.content}>
          <div className={styles.data}>
            <h1 className={styles.title}>{this.state.gaugeInfo.name} <span className={styles.river}>({this.state.gaugeInfo.stream})</span></h1>
            <p className={styles.code}>{this.state.gaugeInfo.code}</p>
            <ul className={styles.zero}><h2 className={styles.blockTitle}>Абсолютная отметка нуля:</h2>
              {
                this.props.info.refElevs.map((elev, idx) => {
                  return <li key={idx} className={styles.zero_item}>
                    <span className={styles.elev}>{elev.elev}</span> (с {dateToStr(elev.startDate)}{elev.endDate ? ' по ' + dateToStr(elev.endDate) : null})
                  </li>
                })
              }
            </ul>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Наблюдения:</h2>
              <Form type='date' />
              <Form type='year' />
            </div>
            <div className={styles.countValues}>
              <ul className={styles.zero}><h2 className={styles.blockTitle}>Расчётные значения:</h2>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-24,83</span> среднемноголетний уровень (безледный период)
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-24,79</span> среднемноголетний уровень (весь период)
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-20,18</span> максимальный уровень (1979 г.)
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-26,87</span> минимальный уровень (1993 г.)
                </li>
              </ul>
              <ul className={styles.zero}><h2 className={styles.blockTitle}>Обеспеченные значения:</h2>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-21,36</span> 1%
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-21,52</span> 3%
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-21,64</span> 5%
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-21,80 </span> 10%
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-22,08 </span> 25%
                </li>
                <li className={styles.zero_item}>
                  <span className={styles.elev}>-22,31 </span> 50%
                </li>
              </ul>
            </div>
          </div>
          <Map map={mapAstr}/>
        </article>
        {/*<Popup gaugeName = {this.props.info.name}
               river = {this.props.info.river}
               year = {1978}
               elevs = {this.props.info.refElevs}
            data = {this.props.data} />*/}
      </main>
    );
  }
}

export default Gauge;
