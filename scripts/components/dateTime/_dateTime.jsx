import React, {Component} from 'react';
import Clock from './clock/_clock.jsx';
import Date from './date/_date.jsx';

export default class App extends Component {
  render() {
    return (
		<div className="test date-time">     
      		<Clock />
      		<Date />
      	</div>
    );
  }
}