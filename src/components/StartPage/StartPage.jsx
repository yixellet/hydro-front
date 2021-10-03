import React from 'react';
import {Helmet} from "react-helmet";
import ListItem from './ListItem/ListItem';
import CommonMap from './CommonMap/CommonMap';
import styles from './StartPage.module.css';

class StartPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverGauge: null
    }
    this.handleHoverGauge = this.handleHoverGauge.bind(this)
  }

  handleHoverGauge(id) {
    this.setState({ hoverGauge: id })
  }

  render() {
    return (
      <>
      <Helmet>
        <title>Гидропосты Астраханской области</title>
      </Helmet>
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
                    onGaugeClick={this.props.onGaugeClick}
                    onGaugeHover={this.handleHoverGauge} />
                })
              }
            </ul>
          </nav>
          <CommonMap hovId={this.state.hoverGauge} />
        </article>
      </main>
      </>
    );
  }
}

export default StartPage;
