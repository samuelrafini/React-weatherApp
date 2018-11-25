import React from 'react';
import { getBackgroundImage } from './api/api'
import { openWeathermapAPI_KEY } from './api/keys/keys'

//Components
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component {

    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        backgroundURL: undefined,
        error: undefined
    }
    getWeather = async (e) => {

        e.preventDefault();
        const city = e.target.city.value
        const country = e.target.country.value


        try {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${openWeathermapAPI_KEY}&units=metric`)
            const data = await api_call.json();

            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                backgroundURL: await getBackgroundImage(city),
                error: undefined
            })

        } catch (error) {
            console.log(error)
            this.setState({
                ...this.state,
                error: 'Please enter a valid value for city and country'
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <Title backgroundURL={this.state.backgroundURL} />
                <div className='weather-container'>
                    <Form getWeather={this.getWeather} />
                    <Weather {...this.state} />
                </div>
            </div>
        );
    }
}

export default App