import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import Chart1 from './components/chart1'


const API_URL1 = "https://internet-traffic-analyzer.shivanihariprasad.workers.dev/internet_traffic";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result1: null
    };
  }

  componentDidMount() {
    fetch(API_URL1, {
      headers: { 'Content-type': 'application/json', 'Authentication': 'cloudflare' }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        else {
          throw new Error('something went wrong')
        }
      })
      .then(response => this.setState({
        result1: response
      })
      );
  }

  render() {
    const { result1 } = this.state;

    if ((result1 !== undefined) && (result1 !== null) && (result1 !== "")) {
      console.log(result1)
      console.log(result1.data)
      return (
        <div className="App">
          <Chart1 data={result1.data} />
        </div>
      );
    }

  }
}

export default App;