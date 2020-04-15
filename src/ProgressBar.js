import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.scss';
const Bar = ({barValue, limit}) =>{


    return (
        (barValue < limit)
        ?(
            <div className='bar'>

                <div className='progress'>
                    <div className='bar-value'>{barValue}%</div>
                    <div className='progressBar' style={{width:`${barValue}%`}}></div>
                </div>
            </div>
        )
        :(
            <div className='bar'>

                <div className='progress'>
                    <div className='bar-value'>{barValue}%</div>
                    <div className='progressBar danger' style={{width:`${barValue}%`}}></div>
                </div>
            </div>
        )
    );

}

Bar.propTypes = {
    barValue: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
}


export default Bar;