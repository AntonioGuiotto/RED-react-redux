import React, { Component } from 'react';
import Content from './components/Content/Content'
import Content1 from './components/Content1/Content1'
import Content2 from './components/Content2/Content2'

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  
  componentDidMount() {
    setTimeout(()=>{
      const el = document.querySelector('.subtitle');
      el.setAttribute('style','top:0;');
    }, 1200)
  }


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Content count={this.props.counter}/>
          <Content1 
            incrementCounter={this.handleIncrement}
            decrementCounter={this.handleDecrement}
            />
            <Content2 />
        </div>
      </Provider>
    );
  }
}

export default App;
