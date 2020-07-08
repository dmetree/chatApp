import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'


const App = () => (
  <div className="App">
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/chat" component={Chat}/>
    </Router>
  </div>
)

export default App;
