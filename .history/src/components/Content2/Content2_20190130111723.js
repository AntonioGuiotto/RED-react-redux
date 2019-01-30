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
    const output = document.querySelector('.content2-output')
    const div = document.createElement("div");
    div.setAttribute('id', 'output');
    console.log(div)
    const jsonData = JSON.stringify(json);
    div.innerHTML = jsonData.map();
    output.appendChild(div)

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
