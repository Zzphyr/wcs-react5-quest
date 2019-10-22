// API: https://thesimpsonsquoteapi.glitch.me/
// If quotes aren't appearing on screen, please confirm whether the API is down 

import React, { Component } from 'react';
import BtnQuote from './BtnQuote';
import DisplayQuote from './DisplayQuote'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}, // it will receive an object from API, so initialize as an object
    }
  }

  getQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0], // see the json structure
        })
      });
  }

  render(){
    return (
      <>
        < BtnQuote onClick={() => this.getQuote() } />
        < DisplayQuote quote={this.state.quote}/>
      </>
    );
  }
}

export default App;
