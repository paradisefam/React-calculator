/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: numbersButton.jsx
     @version: I
     Creation: 07/05/2023
     Last modification: 09/05/2023*/

import React from 'react';
import { ACTIONS } from '../App';

const NumberButton = ({ dispatch, num }) => {
  return (
    <button
      className="glow-on-hover"
      onClick={() => dispatch({ type: ACTIONS.JOINNUM, payload: num })}
    >
      {num}
    </button>
  );
};

export default NumberButton;