import React from 'react';
import ListItem from './ListItem/ListItem';
import Map from './Map/Map';
import styles from './StartPage.module.css';

class StartPage extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {
              this.props.gaugeList.map((item) => {
                return <ListItem name={item.name} key={item.code} />
              })
            }
          </ul>
        </nav>
        <Map />
      </main>
    );
  }
}

export default StartPage;
