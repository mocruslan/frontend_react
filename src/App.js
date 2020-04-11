import React, { Component } from 'react';
import './scss/App.scss';

import Table from './components/body/table.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  //Get data after the component mounts
  componentDidMount() {
    this.getData();
  }

  //Data from HTTP request
  getData() {
    let URL = 'http://localhost:5000';
    let xhr = new XMLHttpRequest();

    //Callback when Server responds
    xhr.addEventListener('load', () => {
      console.log('Server responds' + xhr.responseText);
      alert('Server responds' + xhr.responseText);
      this.setState({ data: xhr.responseText });
    });
    xhr.open('GET', URL);
    xhr.send();
  }

  render() {
    let { content, time } = this.state.data;
    return (
      <div className="App">
        <div className="container">
          <Table content={content} time={time} />
        </div>
      </div>
    );
  }
}

export default App;
