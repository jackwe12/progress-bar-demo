import React, {useState, useEffect} from 'react';
import Bar from './components/ProgressBar/ProgressBar';
import BarSelect from './components/BarSelect/BarSelect';
import ControlBtn from './components/ControlBtn/ControlBtn';
import './App.scss';

function App() {
  const [bar, setBar] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [limit, setLimit] = useState(0);
  const [current, setCurrent] = useState(0); 

  useEffect(()=>{
    fetch(`https://pb-api.herokuapp.com/bars`)
    .then(response=>response.json())    
    .then(data=>{                
      setBar(data.bars);
      setButtons(data.buttons);
      setLimit(data.limit);
      })
  }, [])

  const handleScore = (index, delta) => {
    
    let changedValue = bar[index] + delta;

    if (changedValue > 0 || delta > 0)   
    {
      setBar([...bar.slice(0, index), bar[index] + delta, ...bar.slice(index+1)])
    }

    else if (changedValue < 0 )
    {
      setBar([...bar.slice(0, index), 0, ...bar.slice(index+1)])
    }


  }   

  return (
    <>
      <h1 className='title center'>Progress Bars Demo</h1>
      <h2 className='limit center'>Limit: {limit}</h2>
      <div className="bar-section">
        {bar.map((barValue, index)=>{
        return(
          <Bar
            barValue = {barValue}
            limit = {limit}
            key = {index}
          />
        )
        })}

      </div>
      <div className='control-section'>
        <div className='control-section-inside'>
            <div className='bar-select-button '>
            <BarSelect
              current = {current}
              setCurrent = {setCurrent}
              bars = {bar}
            /> 
          </div>
          <div className='controlBtn-section '>
            {buttons.map((buttonValue, index)=>{
            return(
              <ControlBtn
                buttonValue = {buttonValue}
                index = {index}
                handleScore = {handleScore}
                current = {current}
                key={index}
              />
            )

            })}
          </div>
        </div>   
      </div>


    </>
  );
}

export default App;
