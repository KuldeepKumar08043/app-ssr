import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './component/category/category.component';

class App extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div className="App">
        <Category />
      </div>
    );
  }

}

export default App;
