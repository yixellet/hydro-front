import React from 'react';
import {Helmet} from "react-helmet";
import ListItem from './ListItem/ListItem';
import LeafletMap from '../LeafletMap/LeafletMap';
import styles from './StartPage.module.css';
import { GC } from '../context';

class StartPage extends React.Component {

  render() {
    return (
      <GC.Consumer>
        {(data) => (
          <>
          <Helmet>
            <title>Гидропосты Астраханской области</title>
          </Helmet>
          <main className={styles.main}>
            <article className={styles.content}>
              <nav className={styles.nav}>
                <ul className={styles.list}>
                  {
                    data.map((item) => {
                      return <ListItem 
                        name={item.name} 
                        key={item.id} 
                        code={item.code} 
                        onGaugeClick={this.props.onGaugeClick} />
                    })
                  }
                </ul>
              </nav>
              <LeafletMap gauges={data} />
            </article>
          </main>
          </>
        )}
      </GC.Consumer>
    );
  }
}

export default StartPage;
