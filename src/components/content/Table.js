import React, { Component } from 'react';
import '../../scss/content/Table.scss';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataRetrieved = this.props.dataRetrieved;

    if (dataRetrieved) {
      let data = this.props.data;

      //Return data as HTML
      let table_items = data.map((content, index) => {
        return (
          <tr key={index}>
            <td>{content.data}</td>
            <td>{content.date}</td>
            <td>{content.time}</td>
          </tr>
        );
      });

      return (
        <table className="qr-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>{table_items}</tbody>
        </table>
      );
    }
    return <h1>No data received yet!</h1>;
  }
}

export default Table;
