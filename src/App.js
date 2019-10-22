// API: https://thesimpsonsquoteapi.glitch.me/

import React, { Component } from 'react';
import BtnQuote from './BtnQuote';
import DisplayQuote from './DisplayQuote'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
    }
  }

  getQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data[0], // see the json
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
