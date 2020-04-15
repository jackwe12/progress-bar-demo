import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './ControlBtn.scss';


const Btn =({buttonValue, handleScore, current})=>{
    return(
      
        (buttonValue > 0)
        ?(
        <span >
          <Button variant="secondary" onClick={()=>handleScore(current, buttonValue)}>+{buttonValue}</Button>
        </span>
        )
        :(
        <span >
          <Button variant="secondary" onClick={()=>handleScore(current, buttonValue)}>{buttonValue}</Button>
        </span>
        )
      
    );
}
export default Btn;



Btn.propTypes = {
    buttonValue: PropTypes.number,
    handleScore: PropTypes.func,
    current: PropTypes.number,

}
