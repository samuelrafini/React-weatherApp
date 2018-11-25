import { unsplashAPI_KEY } from './keys/keys'
   
   export const getBackgroundImage = async (city) => {
    const api_call = await fetch(`https://api.unsplash.com/search/photos/?query=${city}&client_id=${unsplashAPI_KEY}`)
    const data = await api_call.json();
    return data.results[Math.floor(Math.random() * data.results.length)].urls.regular
}

