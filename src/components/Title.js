import React from 'react';

const Title = (props) => (
    <div className='title' style={{
        background: `url(${props.backgroundURL}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        backgroundColor: '#4A4D56'
    }}>
        <h1 className='title-header'>Weather App</h1>
    </div>
)

export default Title;

