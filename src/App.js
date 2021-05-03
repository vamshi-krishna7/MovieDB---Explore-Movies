import Navbar from './components/layout/navbar';
import './app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import MoviePage from './components/pages/moviePage';
import Footer from './components/sections/footer';

import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" exact component={MoviePage} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;


