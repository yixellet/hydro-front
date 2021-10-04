import React from 'react';
import styles from './AddObs.module.css';

class AddObs extends React.Component {
  render() {
    return (
      <form>
        <h2 className={styles.title}>Добавить наблюдения для гидропоста <span className={styles.gaugeName}>{this.props.info.name}</span></h2>
        <label>Каталог:</label>
        <input type="file" />
        <input type="submit" />
      </form>
    );
  }
}

export default AddObs;
