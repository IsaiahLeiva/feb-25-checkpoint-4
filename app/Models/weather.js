

export class weather {
    constructor(data) {
        this.temperature = data.main.temp
        this.toggle = false
    }
}

//NOTE: Kelvin to Fahrenheit
// ℉=((K-273.15)*1.8)+32

//NOTE: Kelvin to Celsius
// ℃=K-273.15	


