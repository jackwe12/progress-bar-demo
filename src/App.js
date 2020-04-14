import React, {useState, useEffect} from 'react';
import Bar from './ProgressBar';
import BarSelect from './BarSelect';
import ControlBtn from './ControlBtn';


function App() {
  const [bar, setBar] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [limit, setLimit] = useState(0);
  const [current, setCurrent] = useState(0); 

  useEffect(()=>{
    fetch(`https://pb-api.herokuapp.com/bars`)
    .then(response=>response.json())    //change the response and store in json form
    .then(data=>{                //then we can use iterate methods with this json data
      setBar(data.bars);
      setButtons(data.buttons);
      setLimit(data.limit);
      })
  }, [])

  const handleScore = (index, delta) => {
    
    let changedValue = bar[index] + delta;

    if (changedValue > 0 || delta > 0)   //even if bar<0, if click button>0 still can activate button
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
      <h1>Progress Bars Demo</h1>
      <div className='limit'>limit: {limit}</div>
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
      <div className='bar-select-button'>
        <BarSelect
          current = {current}
          setCurrent = {setCurrent}
          bars = {bar}
        /> 
      </div>
      <div className='controlBtn-section'>
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
    </>
  );
}

export default App;
