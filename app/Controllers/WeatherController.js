import { ProxyState } from "../AppState";



function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export class WeatherController {
    async getWeather() {
        try {

        } catch (error) {
            console.error(error);
        }
    }

}