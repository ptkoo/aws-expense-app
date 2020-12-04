import React from 'react';
import Navbar from './components/navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Dashboard from './components/pages/dashboard'
import Employee from './components/pages/employee'
import Financial from './components/pages/financial'
import Payments from './components/pages/payments'
import Requests from './components/pages/requests'




function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/requests'  component={Requests} />
        <Route path='/payments'  component={Payments} />
        <Route path='/financial' component={Financial} />
        <Route path='/employee'  component={Employee} />
      </Switch>
    </Router>
  );
}

export default App;
