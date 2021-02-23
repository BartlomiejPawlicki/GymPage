import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="app">
      <section className="section_navigation">
          {<Navigation/>}
        </section>
      <header>
        {<Header/>}
        </header>
      <main>
        <section>
        {<Page/>}
        </section>
      </main>
      <footer>
         {<Footer/>}
        </footer>
      </div>
      </Router>
    )
  }
}

export default App;
