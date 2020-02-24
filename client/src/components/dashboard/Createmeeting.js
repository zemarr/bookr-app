import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class Createmeeting extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <h1>hello</h1>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default Createmeeting;