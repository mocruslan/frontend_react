import React, { Component } from 'react';

class QrTable extends Component {
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
}

export default QrTable;
