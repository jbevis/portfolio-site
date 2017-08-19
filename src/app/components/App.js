import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Modal from 'react-modal';

import '../styles/index.css';

import projectList from '../data/projectList';
import skillsList from '../data/skillsList';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import Footer from './Footer/Footer';

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
      projects: [...projectList],
      skills: [...skillsList]
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

  showProjectDetails() {
    const projectToDisplay = this.state.projects.find(project => 
      project.title === this.state.projectToDisplay
    );
    return (
      <Modal className='project-modal'
             isOpen={ this.state.modalOpen }
             contentLabel='Project Details' >
        <ProjectDetails { ...projectToDisplay } handleToggle={ this.toggleModal } />
      </Modal>
    );
  }

  toggleModal(title) {
    if (!this.state.modalOpen) {
      this.setState({ modalOpen: true, projectToDisplay: title });
    } else {
      this.setState({ modalOpen: false, projectToDisplay: '' });
    }
  }

  render() {
    const { projects, skills } = this.state;
    return (
     <main className="app">
      { this.showProjectDetails() }
      <Header handleScrollDown={ this.scrollToAbout } />
      <About skillsList={ skills } handleToggle={ this.toggleModal } />
      <Projects handleToggle={ this.toggleModal } projectList={ projects } />
      <Footer handleScrollUp={ this.scrollToTop } />
     </main>
    );
  }
}

export default App;
