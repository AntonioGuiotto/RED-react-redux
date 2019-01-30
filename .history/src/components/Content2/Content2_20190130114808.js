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
    div.innerHTML = jsonData.map(i => `
    <div className="card">
    <h3>${i.name}</h3>
    <img style="width:100px;" src="./avatar.png">
    <p>${i.price}</p>
    </div>
    `).join('');
    parentDiv.appendChild(div)
  }

  render() {
    return (
      <div className="content2">
        <div className="content2-content">
        <h1>Our members</h1>
        <div className="output"></div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Content2)
