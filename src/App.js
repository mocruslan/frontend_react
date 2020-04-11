import React, { Component } from 'react';
import './scss/App.scss';

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

    //Callback when Server responds
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
          <QRTable
            dataRetrieved={this.state.dateRetrieved}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}
export default App;

//Renders the QRTable
function QRTable(props) {
  const dataRetrieved = props.dataRetrieved;

  if (dataRetrieved) {
    let data = props.data;

    //Return data as HTML
    let table_items = data.map((content, index) => {
      return (
        <tr key={index}>
          <td>{content.content}</td>
        </tr>
      );
    });

    return (
      <table className="qr-table">
        <thead>
          <tr>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>{table_items}</tbody>
      </table>
    );
  }
  return <h1>No data received yet!</h1>;
}
