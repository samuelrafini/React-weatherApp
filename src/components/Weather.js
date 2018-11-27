import React from 'react';

const Weather = props => {
  
    return (
        <div className='weather'>
            {Object.entries(props).map(([key, value]) => {
                if (key === 'city' && value) {
                    return <p key={key} className='weather-data'>Location: {value}, {props.country}</p>
                }else if (key === 'country' || key === 'backgroundURL'){
                    return undefined
                }
                if (value){
                    return <p key={key} className='weather-data'>{key.charAt(0).toUpperCase() + key.slice(1)}: {value} </p>
                }
            })}
        </div>
    )
}
export default Weather
