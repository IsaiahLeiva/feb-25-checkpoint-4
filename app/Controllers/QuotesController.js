import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


function _drawQuote() {
    console.log(ProxyState.quotes)
    let template = ''
    ProxyState.quotes.forEach(q => template += q.quotesTemplate)
    document.getElementById('quotes').innerHTML = template
}

export class QuotesController {
    constructor() {
        console.log('[Quotes Controller]');
        ProxyState.on('quotes', _drawQuote)
        _drawQuote()
    }

    async addQuote() {
        try {
            await quotesService.addQuote()
        } catch (error) {
            console.error(error);
        }
    }



}