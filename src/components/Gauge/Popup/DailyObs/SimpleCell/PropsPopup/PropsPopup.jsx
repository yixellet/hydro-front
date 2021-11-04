import React from 'react';
import styles from './PropsPopup.module.css';

class PropsPopup extends React.Component {
  render() {
    return(
      <div className={styles.propsBlock}>
        <p className={styles.text}>Абсолютная отметка нуля поста <span className={styles.span}>{this.props.refel}</span> м</p>
        <p className={styles.text}>Уровень над нулем поста <span className={styles.span}>{this.props.value}</span> см</p>
        <p className={styles.text}>Абсолютная отметка воды <span className={styles.span}>{this.props.stage}</span> м</p>
        <ul className={styles.list}>Условия наблюдения:
          {
            this.props.props && this.props.props.length > 0 ?
            this.props.props.map((prop) => {
              return <li key={prop['uuid']} className={styles.list_item}>{prop['description']}</li>
            }) :
            <div>-</div>
          }
        </ul>
      </div>
    )
  }
}

export default PropsPopup;
