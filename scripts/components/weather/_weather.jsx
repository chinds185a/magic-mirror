import React, {Component} from 'react';
import Fetch from 'react-fetch';

export default class Weather extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      forecast: {},
	      main: {},
	      weather: {},
	    };
	    this.setWeather = this.setWeather.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.startApp = this.startApp.bind(this);
  	}

	getWeather () {
		var self = this;

		var latitude = this.props.latitude;
		var longitude = this.props.longitude;

		fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&APPID=ed066f80b6580c11d8d0b2fb71691a2c')  
		 	.then (function (response) {  
		    	if (response.status !== 200) {  
		        	console.log('Looks like there was a problem. Status Code: ' + response.status);  
		        	return;  
		      	}

		      	response.json().then(function(data) {  
		        	self.setWeather(data);
		      	});
		    })

		  	.catch (function (err) {  
		   		console.log('Fetch Error :-S', err);  
		  	});
	}

	setWeather (forecast) {
		var main = forecast.main;
		var weather = forecast.weather[0];
		
		this.setState({
	      	main: main,
	      	weather: weather,
	      	forecast: forecast
	    });
	}

  	startApp () {
  		this.getWeather();
  	}

  	componentWillMount () {
    	this.startApp();
  	}

  	componentDidMount () {
  		// update weather every 10 minutes
  		window.setInterval(function () {
      		this.getWeather();
    	}.bind(this), 600000);
  	}

  render() {
  	return (
  		<div className="">
  			<div className="weather-data">
		  		<span className="temp">{Math.round(this.state.main.temp)}&#176;</span>
		  		<h2 className="description">{this.state.weather.description}</h2>
	  		</div>
  		</div>
    )
  }
}