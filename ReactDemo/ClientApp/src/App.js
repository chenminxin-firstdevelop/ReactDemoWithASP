import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchEmployee } from './components/FetchEmployee';
import { AddEmployee } from './components/AddEmployee';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route path='/fetchemployee' component={FetchEmployee} />
            <Route path='/addemployee' component={AddEmployee} />
            <Route path='/employee/edit/:empid' component={AddEmployee} />
            <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
