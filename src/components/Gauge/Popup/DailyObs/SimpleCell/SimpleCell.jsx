import React from 'react';
import PropsPopup from './PropsPopup/PropsPopup';
import styles from './SimpleCell.module.css';

class SimpleCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPropsPopupOpened: false,
      ice: false
    }
    this.ice = ['#','&','(',')','*',':',';','@',']','~','+','<','=','>','F','I','L','N','Q','W','Z','Б','Г','Е','И','К','Н','П','прмз','С','Ф','Х','Ш','Ъ','Л']
    this.handleOpenPropsPopup = this.handleOpenPropsPopup.bind(this)
    this.handleClosePropsPopup = this.handleClosePropsPopup.bind(this)
  }

  componentDidMount() {
    if (this.props.props && this.props.props.length !== 0) {
      let iceCases = false
      this.props.props.forEach((item) => {
        const a = this.ice.some((symbol) => {
          return symbol === item['symbol']
        })
        if (a) {
          iceCases = a
        }
      })
      this.setState({ice: iceCases})
    }
  }

  handleOpenPropsPopup() {
    this.setState({isPropsPopupOpened: !this.state.isPropsPopupOpened})
  }

  handleClosePropsPopup() {
    this.setState({isPropsPopupOpened: false})
  }

  render() {
    const { isPropsPopupOpened, ice } = this.state
    return (
      <td onMouseEnter={() => this.props.onHover(this.props.date)} 
          className={!ice ? `${styles.simpleCell}` : `${styles.simpleCell} ${styles.simpleCell_ice}`}>
        {this.props.stage ? Number(this.props.stage).toFixed(2) : ''}
        {
          this.props.stage ?
          <button className={styles.button} onClick={this.handleOpenPropsPopup}>
            <svg className={styles.svg} 
                viewBox="0 0 3.255 1.779" 
                xmlns="http://www.w3.org/2000/svg">
              <path className={styles.path} 
                    d="m9.103 15.494-5.66-9.803h11.32z" 
                    transform="matrix(.26458 0 0 .16701 -.781 -.903)"/>
            </svg>
          </button>:
          null
        }
        {
          isPropsPopupOpened &&
          <PropsPopup 
              date={this.props.date} 
              stage={this.props.stage} 
              value={this.props.value} 
              refel={this.props.refel}
              props={this.props.props}/>
        }
      </td>
    );
  }
}

export default SimpleCell;
