import React, {Component} from 'react';


export default class Clock extends Component {
	displayWelcome () {
		this.setState({
      name: this.props.name || 'Chris',
      message: this.props.greeting || 'Hello',
      subMessage: this.props.subMessage || 'How can I help you today?'
    })
  }

  componentWillMount () {
  	this.displayWelcome();
  }

  render() {
    return (
      	<div className="welcome-data">
        	<h1>{this.state.message}, {this.state.name}</h1>
          <h3>{this.state.subMessage}</h3>
        </div>
    );
  }
}