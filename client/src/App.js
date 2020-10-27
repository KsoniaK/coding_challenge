import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Series from './components/Series';
import Films from './components/Films';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Navigation />
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/series' component={Series} />
                <Route exact path='/films' component={Films} />
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
