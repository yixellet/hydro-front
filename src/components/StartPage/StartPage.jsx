import React from 'react';
import ListItem from './ListItem/ListItem';
import Map from '../Map/Map';
import map_common from '../../images/map_common';
import styles from './StartPage.module.css';

class StartPage extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <article className={styles.content}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {
                this.props.gaugeList.map((item) => {
                  return <ListItem 
                    name={item.name} 
                    key={item.id} 
                    id={item.id} 
                    onGaugeClick={this.props.onGaugeClick} />
                })
              }
            </ul>
          </nav>
          <Map map={map_common}/>
        </article>
      </main>
    );
  }
}

export default StartPage;
