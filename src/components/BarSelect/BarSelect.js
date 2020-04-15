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
                </Dropdown.Toggle>
           
                <Dropdown.Menu>
                    {bars.map((bar,index)=>   
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
