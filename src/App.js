import React, { Component } from 'react';
import './scss/App.scss';

import QrTable from './components/QrTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRetrieved: false,
      data: {},
    };
  }

  //Get data after the component mounts
  componentDidMount() {
    this.getData();
  }

  //Data from HTTP request
  getData() {
    let URL = 'http://localhost:5000/qr_data';
    let xhr = new XMLHttpRequest();

    //Callback when the Server responds
    xhr.addEventListener('load', () => {
      console.log('Server responds' + xhr.response);
      this.setState({
        data: JSON.parse(xhr.response),
        dateRetrieved: true,
      });
    });
    xhr.open('GET', URL);
    xhr.send();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <QrTable
            dataRetrieved={this.state.dateRetrieved}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}
export default App;
