import React from 'react';
import './App.css';

import ColorBoxes from './ColorBoxes'
import Profile from './Profile'

function App(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Profile />
      <ColorBoxes />
    </div>
  )
}

export default App;
