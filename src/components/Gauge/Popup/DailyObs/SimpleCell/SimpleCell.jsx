import React from 'react';
import styles from './SimpleCell.module.css';

class SimpleCell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPropsOpened: false
    }
    this.handleOpenProps = this.handleOpenProps.bind(this)
  }

  handleOpenProps() {
    this.setState({isPropsOpened: !this.state.isPropsOpened})
  }

  render() {
    const { isPropsOpened } = this.state
    return (
      <td onMouseEnter={() => this.props.onHover(this.props.date)} 
          className={styles.simpleCell}>
        {this.props.content ? Number(this.props.content).toFixed(2) : ''}
        {
          this.props.content ?
          <button className={styles.button} onClick={this.handleOpenProps}>
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
        <div className={`${styles.propsBlock} ${isPropsOpened ? styles.propsBlock_open : styles.propsBlock_hide}`}>
          <p>Уровень воды <span>{this.props.content}</span></p>
          <ul>Условия наблюдения:
            {
              this.props.props ?
              this.props.props.map((prop) => {
                return <li key={prop['uuid']}>{prop['description']}</li>
              }) :
              <div>-</div>
            }
          </ul>
        </div>
      </td>
    );
  }
}

export default SimpleCell;
