import React from 'react';
import Button from 'react-bootstrap/Button';



const Btn =({buttonValue, index, handleScore, current, key})=>{
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