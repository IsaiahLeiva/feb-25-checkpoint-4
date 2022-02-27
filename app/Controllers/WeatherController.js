import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeathersService.js";



function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export class WeatherController {
    constructor() {
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error);
        }
    }

    changeTemperature() {
        console.log("button clicked");
        weatherService.changeTemperature()
    }

}