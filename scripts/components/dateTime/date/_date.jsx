import React, {Component} from 'react';
import Moment from 'moment';

export default class Date extends Component {
	setDate () {
  		var now = Moment();
  	
     	this.setState({
        	day: now.format("dddd"),
          date: now.format("Do"),
        	month: now.format("MMMM")
      });
  }

  componentWillMount () {
  	this.setDate();
  }

  componentDidMount () {
  	 window.setInterval(function () {
      this.setDate();
    }.bind(this), 1000);
  }

  render() {
    return (
      	<div>
        	<h2>{this.state.day}</h2>
          <h2>{this.state.month} {this.state.date}</h2>
        </div>
    );
  }
}