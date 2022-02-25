

export default class Quote {
    constructor(data) {
        this.character = data.character || data.character;
        this.quote = data.quote || data.quote
    }

    get ActiveQuote() {
        return `
        <div class="text-center">
        <h3>"${this.quote}"</h3>
        <h4>-${this.character}</h4>
        </div>
        `
    }

}