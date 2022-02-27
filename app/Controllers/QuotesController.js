import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


function _drawQuote() {
    document.getElementById('quotes').innerHTML = ProxyState.quotes.Template
}

export class QuotesController {
    constructor() {
        console.log('[Quotes Controller]');
        ProxyState.on('quotes', _drawQuote)
        this.addQuote()
    }

    async addQuote() {
        try {
            await quotesService.addQuote()
        } catch (error) {
            console.error(error);
        }
    }



}