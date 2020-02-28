import React, { Component } from 'react';
import Button from '../buttons/Buttons'
// new
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            startDate: new Date()
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        // console.log(this.state)
    }

    onChange = date => {
        this.setState({ startDate: date })
        // console.log(this.state)
    }
   

    onSubmit = () => {

        let booking = this.state
        console.log(booking)

    }
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
                            required
                            />
                    </label>
                    <br />
                    <label>Last Name:
                        <input
                            name="lastname"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange}
                            required
                        />
                    </label>
                    <br />
                    <label>Select Room
                        <select value={this.state.room}
                            onChange={this.handleInputChange}
                            name = 'room'>
                            <option value="">---select room---</option>
                            <option value="board room">Board Room</option>
                            <option value="marketing room">Marketing Room</option>
                            <option value="sales room">Sales Room</option>
                            <option value="tech room">Tech Room</option>
                        </select>
                    </label>
                    <br />
                    <div>
                       <DatePicker
                            selected={this.state.startDate}
                            onChange={this.onChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm"
                        />
                    </div>
                </form>
                <Button
                    name='Book Room'
                    click={this.onSubmit}
                />
            </div>
        );
    }
}

export default Booking;