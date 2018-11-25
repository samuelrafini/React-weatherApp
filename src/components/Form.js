import React from 'react';

const Form = props => (
    <div>
        <form className='form' onSubmit={props.getWeather}>
            <input
                className='form-input'
                type='text'
                name='city'
                placeholder='City...'
            />

            <input
                className='form-input'
                type='text'
                name='country'
                placeholder='Country...'
            />
            <button className='form-button'>Get Weather</button>
        </form>
    </div>
)
export default Form