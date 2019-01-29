import React from 'react'
import { connect } from 'react-redux';
import './Content1.css'

function Content1(props) {

  console.log(props)

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
        <button onClick={increment}>Increment</button>
        {(props === 0) ? <button onClick={decrement} disabled>Decrement</button> : <button onClick={decrement}>Decrement</button>}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
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

