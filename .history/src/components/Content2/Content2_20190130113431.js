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
    const parentDiv = document.querySelector('.output')
    const div = document.createElement("div");
    div.setAttribute('id', 'pizze');
    console.log(div)
    const jsonData = json.pizze;  
    console.log(jsonData)
    div.innerHTML = jsonData.map(i => `<p>${i.name}</p>`);
    parentDiv.appendChild(div)

  }

  render() {
    return (
      <div className="content2">
        <h1>Content2</h1>
        <div className="output"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content2)
