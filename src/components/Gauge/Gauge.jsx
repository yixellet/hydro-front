import React from 'react';
import {Helmet} from "react-helmet";
import { withRouter } from "react-router";
import List from './List/List';
import BlockHeader from './BlockHeader/BlockHeader';
import Form from './Form/Form';
import Map from '../Map/Map';
import Popup from './Popup/Popup';
import DailyObs from './Popup/DailyObs/DailyObs';
import AddObs from './Popup/AddObs/AddObs';
//import LeafletMap from '../LeafletMap/LeafletMap';
import mapAstr from '../../images/map_Astr';
import Years from './Years/Years';
import { dateToStr } from '../../utils/dates';
import ddToDms from '../../utils/ddToDms';
import styles from './Gauge.module.css';

class Gauge extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      code: null,
      elevs: [],
      lat: null,
      lon: null,
      maxStage_calc: null,
      minStage_calc: null,
      meannAnnual_gms: null,
      name: null,
      river: null,
      uuid: null,
      isFetching: false,
      error: null,
      year: null,
      date: null,
      isYearObsPopupOpened: false,
      yearObs: [],
      singleObservation: null,
      isAddObsPopupOpened: false,
      countObs: []
    }
    this.handleGetSingleObservation = this.handleGetSingleObservation.bind(this)
    this.handleGetYearObservations = this.handleGetYearObservations.bind(this)
    this.handleCloseYearObsPopup = this.handleCloseYearObsPopup.bind(this)
    this.handleOpenAddObsPopup = this.handleOpenAddObsPopup.bind(this)
    this.handleCloseAddObsPopup = this.handleCloseAddObsPopup.bind(this)
  }

  componentDidMount() {
    this.setState({isFetching: true})
    this.props.api.getGaugeInfo(this.props.match.params.code)
      .then((data) => {
        this.setState({
          data: data,
          code: data.code,
          elevs: data.elevs,
          lat: data.lat,
          lon: data.lon,
          maxStage_calc: data.maxStage_calc,
          minStage_calc: data.minStage_calc,
          meannAnnual_gms: data.meannAnnual_gms,
          name: data.name,
          probabilities_gms: data.probabilities_gms,
          river: data.river,
          uuid: data.uuid
        })
        this.props.api.getObsCount(data.code)
          .then((d) => {
            this.setState({
              countObs: d.data,
              isFetching: false
            })
          })
      },
      (error) => {
        this.setState({
          error: error
        })
      })
  }

  handleGetYearObservations(year) {
    this.setState({year: year})
    this.props.api.getFullYearObservations(this.state.code, year)
      .then((data) => {
        this.setState({
          yearObs: data,
          isYearObsPopupOpened: true
        })
      })
  }

  handleGetSingleObservation(date) {
    this.setState({date: date})
    this.props.api.getSingleObservation(this.state.code, date)
      .then((data) => {
        this.setState({singleObservation: data.data})
      })
  }

  handleCloseYearObsPopup() {
    this.setState({isYearObsPopupOpened: false})
  }

  handleOpenAddObsPopup() {
    this.setState({isAddObsPopupOpened: true})
  }

  handleCloseAddObsPopup() {
    this.setState({isAddObsPopupOpened: false})
  }

  render() {
    const { elevs, 
            name, 
            river, 
            code, 
            lat, 
            lon, 
            isFetching, 
            error, 
            year,
            yearObs,
            isYearObsPopupOpened, 
            isAddObsPopupOpened, 
            singleObservation,
            countObs,
            probabilities_gms
          } = this.state;
    return (
      <>
      <Helmet>
        <title>
          { error ? 'Ошибка загрузки данных' : isFetching ? 'Загрузка данных...' : name }
        </title>
      </Helmet>
      <main className={styles.main}>
        <article className={styles.content}>
          {
            error ?
            <>
              <h1><span>404</span> - страница не найдена</h1>
              <h2>Ой, здесь ничего нет :(</h2>
            </> :
            isFetching ?
            <div className={styles.isFetching}><p>ЗАГРУЗКА ДАННЫХ...</p></div> :
            <>
            <div className={styles.nameBlock}>
              <h1 className={styles.title}>{name} <span className={styles.river}>({river})</span></h1>
              <button className={styles.addButton} onClick={this.handleOpenAddObsPopup}>
                <svg width="18.142" height="18.142" viewBox="0 0 4.8 4.8" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.addButtonCross} d="M5.046 2.4H-.246M2.4 5.046V-.246"/>
                </svg>
              </button>
              <div className={styles.toolTip}>Добавить наблюдения</div>
            </div>
            <div className={styles.data_map}>
              <div className={styles.data}>
                <p className={styles.code}>{code}</p>
                <div className={styles.coordsBlock}>
                  <svg width="25" height="25" viewBox="0 0 7.937 7.938" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.path} d="M3.969 0C0 0 2.875 5.33 3.969 7.938 5.062 5.33 7.938 0 3.969 0Z"/>
                    <circle className={styles.circle} cx="3.969" cy="2.106" r="1.196"/>
                  </svg>
                  <p className={styles.coord}>{ddToDms(lat)} СШ</p>
                  <p className={styles.coord}>{ddToDms(lon)} ВД</p>
                </div>
                <div className={styles.refEl_obs}>
                  <ul className={styles.zero}><h2 className={styles.blockTitle}>Абсолютная отметка нуля:</h2>
                    {
                      elevs.map((elev, idx) => {
                        return <li key={idx} className={styles.zero_item}>
                          <span className={styles.elev}>{elev.elev.toFixed(2)}</span> (с {dateToStr(elev.startDate, 'word')}{elev.endDate ? ' по ' + dateToStr(elev.endDate, 'word') : null})
                        </li>
                      })
                    }
                  </ul>
                  <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Наблюдения:</h2>
                    <div className={styles.dateBlock}>
                      <Form type='date' action={this.handleGetSingleObservation} />
                      <p className={styles.elevForm}>{singleObservation ? singleObservation['state'].toFixed(2) : null}</p>
                    </div>
                    <Form type='year' action={this.handleGetYearObservations} />
                  </div>
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
                  
                  <List header={<BlockHeader header='Обеспеченные значения:' />}
                  list={probabilities_gms} />

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
                      <span className={styles.elev}>-21,80</span> 10%
                    </li>
                    <li className={styles.zero_item}>
                      <span className={styles.elev}>-22,08</span> 25%
                    </li>
                    <li className={styles.zero_item}>
                      <span className={styles.elev}>-22,31</span> 50%
                    </li>
                  </ul>
                </div>
              </div>
              <Map map={mapAstr}/>
              {/*<LeafletMap lat={lat} lon={lon} name={name} />*/}
            </div>
            <Years data={countObs}/>
            </>
          }
        </article>
        {
          isYearObsPopupOpened &&        
          <Popup content={<DailyObs 
                name={name}
                stream={river}
                year = {year}
                data={yearObs} />}
                closePopup={this.handleCloseYearObsPopup} />
        }
        {
          isAddObsPopupOpened &&        
          <Popup content={<AddObs name={name} />}
                closePopup={this.handleCloseAddObsPopup} />
        }
      </main>
      </>
    );
  }
}

export default withRouter(Gauge);
