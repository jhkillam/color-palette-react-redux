import React from 'react';

function ColorBox (props, idx, _allBoxes) {
  const style = {
    border: "2px solid black",
    backgroundColor: props.color,
    width: "200px",
    height: "200px", 
    textAlign: 'center'
  }

  let btnText = 'Unlocked'
  if (props.isLocked) {
    btnText = 'Locked'
  }

  return (
    <div style={style}>
      <button onClick={props.toggleLock}>{btnText}</button>
      <h3><span style={{ backgroundColor: '#373637', color: '#ffffff', borderRadius: '5px', padding: '0 5px' }}>{props.color}</span></h3>
    </div>
  )
}

export default ColorBox;