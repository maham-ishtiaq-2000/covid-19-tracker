import React from 'react';
import './InfoBox.css';

const InfoBox = (props) => {
  let className = "number1";
  let type = "";
  let total = "";
  if(props.type == "Recovered"){
    className = "number2"
    type=props.name.todayRecovered
    total = props.name.recovered
  }
  else if(props.type == "Death"){
    type=props.name.todayDeaths
    total = props.name.deaths
  }
  else{
    type=props.name.todayCases
    total = props.name.cases
  }
  
 
  return (
    <div className='infobox'>
        <p>{props.type}</p>
        <p className={className}>{type}</p>
        <p>{total} Total</p>
    </div>
  )
}

export default InfoBox