import React from 'react'
import { connect } from 'react-redux';
import './Content1.css'

function Content1(props) {

  const increment = function() {
    props.increment()
  }

  const decrement = function() {
    props.decrement()
  }

  return (
    <div className="content">
      <div className="text">
        <h1>Counter Application</h1>
        <h4>React and Redux</h4>
        <p>
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
          This project was created with React, it has no pourpose other than a pure practical exercise.
        </p>
      </div>
      <div className="buttons">
        <img src="./banana.gif_c200"></img>
        
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    decrement: () => {
      dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content1);

