import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Form,Col, Card } from 'react-bootstrap';
import Button from '../buttons/Buttons'

class Booking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstname: '',
        lastname: '',
        value:'',
        date: new Date()
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value =  target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      console.log(this.state)
    }

   onChange = event => console.log(this.setState({ date: event.target.value }))
  
    render() {
      return (
          <div>
        <form>
          <label>
            First Name
            <input
              name="firstname"
              type="text"
              value={this.state.firstname}
              onChange={this.handleInputChange} 
              required/>
          </label>
          <br />
          <label>
            Last Name:
            <input
              name="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleInputChange}
              required />
          </label>
          <br />
          <label>
          Select Room
          <select value={this.state.room}
           onChange={this.handleInputChange}
           required
           > <option value="">---select room---</option>
            <option value="board room">Board Room</option>
            <option value="marketing room">Marketing Room</option>
            <option value="sales room">Sales Room</option>
            <option value="tech room">Tech Room</option>
          </select>
        </label>
        <br />
        <DateTimePicker
        onChange={this.onChange}
        value={this.state.date}
        required
        /> 
        </form>
        <Button 
        name='Book Room'
       
        />
        </div>
      );
    }
  }

  export default Booking




