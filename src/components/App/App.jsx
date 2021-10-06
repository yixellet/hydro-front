import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import StartPage from '../StartPage/StartPage';
import Gauge from '../Gauge/Gauge';
import { GC } from '../context';

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
        this.setState({ gauges: data.data })
      })
  }

  handleGaugeClick(id) {
    this.setState({ selectedGauge: id })
  }

  render() {
    return (
      <>
        <GC.Provider value={this.state.gauges}>
          <Header title='Гидрологические посты Астраханской области' />
          <Switch>
            <Route exact path="/">
                <StartPage gaugeList={this.state.gauges} onGaugeClick={this.handleGaugeClick} />
            </Route>
            <Route path="/gauge/:id">
              <Gauge api={this.props.api} gaugeId={this.state.selectedGauge} />
            </Route>
          </Switch>
        </GC.Provider>
      </>
    );
  }
}

export default App;
