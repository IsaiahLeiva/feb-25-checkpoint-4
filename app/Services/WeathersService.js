import { ProxyState } from "../AppState.js";
import { weather } from "../Models/weather.js";
import { weatherApi } from "./AxiosService.js";


export class WeatherService {
    async getWeather() {
        const res = await weatherApi.get()
        console.log(res.data);
        ProxyState.weather = new weather(res.data)
        ProxyState.weather = ProxyState.weather
        console.log(ProxyState.weather);
    }

    changeTemperature() {
        ProxyState.weather.toggle = !ProxyState.weather.toggle
        ProxyState.weather = ProxyState.weather
    }
}

export const weatherService = new WeatherService();