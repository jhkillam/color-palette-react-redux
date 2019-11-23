import React from 'react';
import './App.css';

import ColorBox from './ColorBox';
import myStore from './store';

function ColorBoxes(props) {
  return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => myStore.dispatch({type: 'RANDOMIZE'})}>Randomize!</button>
        <button onClick={() => myStore.dispatch({type: 'ADD_BOX'})}>Add box</button>
        <button onClick={() => myStore.dispatch({type: 'REMOVE_BOX'})}>Remove box</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {props.boxes.map((box, idx) => (
            <ColorBox {...box} key={idx} toggleLock={() => myStore.dispatch({type: 'TOGGLE_BOX', boxIndex: idx})}/>
          ))}
        </div>
      </div>
  )
}

export default ColorBoxes;
