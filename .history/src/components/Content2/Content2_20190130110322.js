import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Content2.css';

export class Content2 extends Component {

  constructor() {
    super()

    this.fetchAPI()
  }

  async fetchAPI() {
    const res = await fetch('https://raw.githubusercontent.com/Antonizero/demo/master/pizze.json');
    const json = await res.json();
    console.log(json)
    document.createElement('<div>').setAttribute('id', 'div')
  }

  render() {
    return (
      <div className="content2">
        <h1>Content2</h1>
        <div className="content2-output"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content2)
