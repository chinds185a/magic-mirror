import React, {Component} from 'react';

import DateTime from './components/dateTime/_dateTime.jsx';
import Weather from './components/weather/_weather.jsx';
import Welcome from './components/welcome/_welcome.jsx';

require ('../sass/index.scss');

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: ''
    };
    this.showPosition = this.showPosition.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.startApp = this.startApp.bind(this);
  }

  startApp () {
    this.getLocation();
  }
  
  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
  }
  
  showPosition(position) {
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
  }

  componentWillMount () {
    this.startApp();
  }

  render() {

    if (this.state.latitude != '' && this.state.longitude != '') {
      var weatherComponent = <Weather latitude={ this.state.latitude } longitude={ this.state.longitude } />
    } else {
      var weatherComponent = null;
    }

    return (
  		<div className="container">
  			<div className="header-container">
  				{weatherComponent}
  	  		<DateTime />
    		</div>
  			<div className="welcome-container">
  				<Welcome name="Name" />
  			</div>
      </div>
    );
  }
}
