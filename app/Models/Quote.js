import { generateId } from "../Utils/generateId.js";


export default class Quote {
    constructor(data) {
        this.id = generateId()
        this.character = data.character || data.character;
        this.quote = data.quote || data.quote
    }

    get ActiveQuote() {
        return `
        <div id="quotes" class="text-center">
        <h3 class="fst-italic">"${this.quote}"</h3>
        <h4>-${this.character}</h4>
        </div>
        `
    }
}