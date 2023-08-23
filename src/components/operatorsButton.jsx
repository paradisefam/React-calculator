/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: operatorsButton.jsx
     @version: I
     Creation: 07/05/2023
     Last modification: 09/05/2023*/

import React from 'react';
import { ACTIONS } from '../App';

const OperatorButton = ({ dispatch, operator }) => {
  return (
    <button
      className="glow-on-hover-2"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: operator })
      }
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
