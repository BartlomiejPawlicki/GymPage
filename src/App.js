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
      <div className="App">
      <header>
        {<Header/>}
        </header>
      <main>
        <aside>
          {<Navigation/>}
        </aside>
        <section>
        {<Page/>}
        </section>
        <footer>
         {<Footer/>}
        </footer>
      </main>
      </div>
      </Router>
    )
  }
}

export default App;
