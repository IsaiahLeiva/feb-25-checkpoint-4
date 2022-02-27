

export class weather {
    constructor(data) {
        this.temperature = data.main.temp
        this.toggle = true
    }

    get Template() {
        return `
        <h1 class="">${this.toggle ? this.Fahrenheit : this.Celsius}</h1>
        <li>Fahrenheit: ${this.Fahrenheit}</li>
        <li>Celsius: ${this.Celsius}</li>
        <button onclick="app.weatherController.changeTemperature()">Change Temperature</button>
        `
    }

    get Fahrenheit() {
        let F = 0
        F = ((this.temperature - 273.15) * 1.8) + 32
        return F.toFixed(0)
    }

    get Celsius() {
        let C = 0
        C = (this.temperature - 273.15)
        return C.toFixed(0)
    }
}

//NOTE: Kelvin to Fahrenheit
// ℉=((K-273.15)*1.8)+32

//NOTE: Kelvin to Celsius
// ℃=K-273.15	

//NOTE: ternary operator: 
// condition ? iftrue : iffalse

