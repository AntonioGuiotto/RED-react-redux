import React from 'react'
import { connect } from 'react-redux';
import './Content.css'

function Content(props) {
  return (
    <div className="header">
      <div className="div">
            <div className="title">
              <h1>RED</h1>
            </div>
            <div className="subtitle">
              <h3>software</h3>
              <h3>systems</h3>
            </div>
        </div>
        <div className="counter">
            <p>Counter</p>
            <span>{(props.count.count === null) ? 0 : props.count.count}</span>
        </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counter
  };
}


export default connect(mapStateToProps)(Content);