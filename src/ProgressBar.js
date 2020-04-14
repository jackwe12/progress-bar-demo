import React from 'react';
// import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Bar = ({barValue, limit}) =>{

    return (
        (barValue < limit)
        ?(
            <div className='bar'>
                <ProgressBar 
                now={barValue}
                label={`${barValue}%`}    
                />
            </div>
        )
        :(
            <div className='bar'>
                <ProgressBar 
                now={barValue}
                label={`${barValue}%`}    
                variant='danger'
                />
            </div>
        )
    );

}

// ProgressBar.propTypes = {
//     barValue: PropTypes.array.isRequired,
//     limit: PropTypes.number.isRequired
// }


export default Bar;