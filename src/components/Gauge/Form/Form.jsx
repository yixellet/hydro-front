import React from 'react';
import styles from './Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      year: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state.year)
    this.setState({year: ''})
  }

  render() {
    if (this.props.type === 'date') {
      this.text = 'Дата:'
      this.widget = <input className={styles.date} type="date" 
      id="date" name="date" />
    } else if (this.props.type === 'year') {
      this.text = 'Год:'
      this.widget = <input className={styles.date} type="number" 
      min="1960" max="2021" step="1" id="year" name="year" onChange={this.handleChange}  />
    }
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="date">{this.text}</label>
        {this.widget}
        <input type="submit" className={styles.button} value="Показать" />
      </form>
    );
  }
}

export default Form;
