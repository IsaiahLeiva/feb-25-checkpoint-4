import { generateId } from "../Utils/generateId";


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
        //TODO: GET THIS TO OVERLAY
        <h4>-${this.character}</h4>
        </div>
        `
    }
}