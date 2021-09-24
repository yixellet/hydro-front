import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import Gauge from '../Gauge/Gauge';
import data from '../../data/dateConverter/out';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gauges: [],
      selectedGauge: null,
    }
    this.handleGaugeClick = this.handleGaugeClick.bind(this)
  }

  componentDidMount() {
    this.props.api.getGauges()
      .then((data) => {
        this.setState({ gauges: data })
      })
  }

  handleGaugeClick(id) {
    this.setState({ selectedGauge: id })
    console.log(this.state.selectedGauge)
  }

  render() {
    return (
      <>
        <Header title='Гидрологические посты Астраханской области' />
        <Switch>
          <Route exact path="/">
            <StartPage gaugeList={this.state.gauges} onGaugeClick={this.handleGaugeClick} />
          </Route>
          {/*<Route path="/gauge">
            <Gauge api={this.props.api} gaugeId={this.state.selectedGauge} />
          </Route>*/}
        </Switch>
      </>
    );
  }
}

export default App;
