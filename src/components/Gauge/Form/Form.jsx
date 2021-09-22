import React from 'react';
import styles from './Form.module.css';

class Form extends React.Component {
  render() {
    if (this.props.type === 'date') {
      this.text = 'Дата:'
      this.widget = <input className={styles.date} type="date" 
      id="date" name="select-date" />
    } else if (this.props.type === 'year') {
      this.text = 'Год:'
      this.widget = <input className={styles.date} type="number" 
      min="1960" max="2021" step="1" id="year" name="select-year"  />
    }
    return (
      <form className={styles.form}>
        <label className={styles.label} htmlFor="date">{this.text}</label>
        {this.widget}
        <input type="submit" className={styles.button} value="Показать" />
      </form>
    );
  }
}

export default Form;
