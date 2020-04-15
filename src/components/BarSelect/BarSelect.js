import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import PropTypes from 'prop-types';
import './BarSelect.scss';

const DropButton =({current, setCurrent, bars})=>{

    return(
        <span >
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">  
                    # Progress{current + 1}               
                    {/* show current progress */}
                </Dropdown.Toggle>
           
                <Dropdown.Menu>
                    {/* when hit the progress button switch to the progress you choose */}
                    {bars.map((bar,index)=>   //takes the second parameter as index
                        <Dropdown.Item  onClick={()=>setCurrent(index)} key={index}> # Progress {index + 1}</Dropdown.Item> 
                    
                    )}
                </Dropdown.Menu>
                </Dropdown>
                


        </span>
    );
}

export default DropButton;

DropButton.propTypes = {
    setCurrent: PropTypes.func,
    bars: PropTypes.array,
    current: PropTypes.number,

}
