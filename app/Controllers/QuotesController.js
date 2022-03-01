import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


function _drawQuote() {
    document.getElementById('quotes').innerHTML = ProxyState.quotes.Template
}

export class QuotesController {
    //NOTE: Rubber ducky the constructor, ask why [Quotes controller] is in the log
    constructor() {
        console.log('[Quotes Controller]');
        ProxyState.on('quotes', _drawQuote)
        this.addQuote()
        //NOTE: Line 13, I'm still not sure what that did for me
    }

    async addQuote() {
        try {
            await quotesService.addQuote()
        } catch (error) {
            console.error(error);
        }
    }

}