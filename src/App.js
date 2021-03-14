import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import Page from './Page';
import Footer from './Footer';
import Navigation from './Navigation';
import { DataProvider } from "./components/DataProvider";
import ScrollToTop from './components/ScrollToTop'

class App extends Component {
  render() {
    return (
      <DataProvider>
      <Router>
      <ScrollToTop />
      <div id="top"className="app">
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
      </DataProvider>
    )
  }
}

export default App;
