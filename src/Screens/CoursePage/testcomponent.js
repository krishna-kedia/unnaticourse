import React from 'react';
import tick from './tick.png';

function Testcomponent(props) {
  return (
      <div className="flexit">
          <div className="comp"><img src={props.imgsrc} width="20vw" height="20vw" />   {props.name}</div>
      </div>

  )
}

export default Testcomponent;