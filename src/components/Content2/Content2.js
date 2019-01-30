import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Content2.css';

export class Content2 extends Component {

  constructor() {
    super()
    this.fetchAPI()
  }

  async fetchAPI() {
    const res = await fetch('https://raw.githubusercontent.com/Antonizero/demo/master/avatars.json');
    const json = await res.json();
    const parentDiv = document.querySelector('.output')
    const div = document.createElement("div");
    div.setAttribute('id', 'avatars');
    console.log(div)
    const jsonData = json.avatars;  
    console.log(jsonData)
    div.innerHTML = jsonData.map(i => `
    <div className="card" style="background-color: black;margin:10px;">
    <h3 style="margin:0;">${i.name}</h3>
    <img src="./avatar.png" style="width: 100%;">
    <p style="margin:0;">${i.superpower}</p>
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
