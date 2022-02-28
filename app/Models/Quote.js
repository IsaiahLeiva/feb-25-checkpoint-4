import { generateId } from "../Utils/generateId.js";


export class Quote {
    constructor(data) {
        this.id = data.id
        this.author = data.author
        this.content = data.content
    }

    get Template() {
        return `
        <h3 id="author" class="fst-italic hide">${this.author}</h3>
        <p id="hovertext" class="text-shadow author">"${this.content}"</p>
        `
    }
}

