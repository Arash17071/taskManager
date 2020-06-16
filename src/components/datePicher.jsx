import React, { Component } from 'react';
import momentJalaali from 'moment-jalaali'
import DatePicker from 'react-datepicker2';

class Dater extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: momentJalaali()
        };
      }
      render() {
        return <DatePicker
          isGregorian={false}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
    }
};

export default Dater;