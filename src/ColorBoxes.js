import React from 'react';
// import './App.css';
import { connect } from 'react-redux'

import ColorBox from './ColorBox';
// import myStore from './store';

function ColorBoxes(props) {
  return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={props.randomize}>Randomize!</button>
        <button onClick={props.addBox}>Add box</button>
        <button onClick={props.removeBox}>Remove box</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {props.boxes.map((box, idx) => (
            <ColorBox {...box} key={idx} toggleLock={() => props.toggleLock(idx)}/>
          ))}
        </div>
      </div>
  )
}

const ConnectedColorBoxes = connect(
  (state) => {
    return {
      boxes: state.boxes
    }
  },
  (dispatch) => {
    return {
      randomize: () => {
        return dispatch({
          type: 'RANDOMIZE'
        })
      },
      addBox: () => {
        return dispatch({
          type: 'ADD_BOX'
        })
      },
      removeBox: () => {
        return dispatch({
          type: 'REMOVE_BOX'
        })
      },
      toggleLock: (index) => {
        return dispatch({
          type: 'TOGGLE_LOCK',
          boxIndex: index
        })
      }
    }
  }
)(ColorBoxes)

export default ConnectedColorBoxes;
