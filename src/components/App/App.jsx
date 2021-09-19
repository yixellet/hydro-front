import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import Gauge from '../Gauge/Gauge';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gauge: null,
    }
  }

  findGauge(name) {
    this.props.gaugeList.forEach((gauge) => {
      if (gauge.name === name) {
        this.setState({gauge: gauge})
      }
    })
  }

  render() {
    return (
      <>
        <Header title='Гидрологические посты Астраханской области' />
        <Switch>
          <Route exact path="/">
            <StartPage gaugeList={this.props.gaugeList} />
          </Route>
          <Route path="/gauge">
            <Gauge info={this.props.gaugeList[2]} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
