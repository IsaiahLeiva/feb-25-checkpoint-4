


function showTime() {
    let date = new Date()
    let time = date.toLocaleTimeString()
    document.getElementById('clock').innerHTML = `<h3>${time}</h3>`
}


export class ClockController {

    constructor() {
        console.log("it's the time");
        setInterval(showTime, 1000)
    }

}