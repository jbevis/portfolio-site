import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal';

import '../styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      projectToDisplay: ''
    };
  }

  render() {
    return (
     <main className="app">
      <h1>Jack Bevis Portfolio</h1>
     </main>
    );
  }
}

export default App;
