

export class weather {
    constructor(data) {
        this.temperature = data.main.temp
        this.toggle = false
    }

    get Template() {
        return `
        <h1 class="">${this.temperature}</h1>
        `
    }
}

//NOTE: Kelvin to Fahrenheit
// ℉=((K-273.15)*1.8)+32

//NOTE: Kelvin to Celsius
// ℃=K-273.15	


