import React from 'react';
import Navbar from './component/navbar/navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Dashboard from './pages/dashboard'
import Employee from './pages/employee'
import Financial from './pages/financial'
import Payments from './pages/payments'
import Requests from './pages/requests'

import './App.css';
import CAR_Form from './components/CAR_Form'
import SEC_Form from './components/SEC_Form'
import TR_Form from './components/TR_Form'
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
