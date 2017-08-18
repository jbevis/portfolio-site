import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal';

import '../styles/index.css';

import projectList from '../data/projectList';
import skillsList from '../data/skillsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      projectToDisplay: '',
      projects: [],
      skills: []
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollToAbout = this.scrollToAbout.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: [...projects],
      skills: [...skills]
    });
  }

  scrollToAbout() {
    Scroll.scroller.scrollTo('about', {
      durcation: 1000,
      delay: 250,
      smooth: true
    });
  };

  scrollToTop() {
    Scroll.animateScroll.scrollToTop();
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
