import { generateId } from "../Utils/generateId.js";


export class Quote {
    constructor(data) {
        this.id = data.id
        this.author = data.author
        this.content = data.content
    }

    get Template() {
        return `
        <h3 class="fst-italic">${this.author}</h3>
        <p id="hovertext" class="text-shadow">"${this.content}"</p>
        `
    }
}

//NOTE: Jeopardy in style modify classes/Questions template