import React from 'react';
import './App.css';

import ColorBoxes from './ColorBoxes'
import Profile from './Profile'

function App(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Profile profile={props.profile}/>
      <ColorBoxes boxes={props.boxes}/>
    </div>
  )
}

export default App;
