import React from 'react';
import styles from './AddObs.module.css';

class AddObs extends React.Component {
  render() {
    return (
      <form className={styles.form}>
        <h2 className={styles.title}>Добавить наблюдения для г/п <span className={styles.gaugeName}>{this.props.name}</span></h2>
        <label className={styles.label}>Каталог:</label>
        <input type="file" />
        <div className={styles.buttonBlock}>
          <input type="submit" className={styles.button} />
        </div>
      </form>
    );
  }
}

export default AddObs;
