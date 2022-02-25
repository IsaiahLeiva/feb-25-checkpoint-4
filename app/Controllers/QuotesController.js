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
        ProxyState.on('quote', _drawQuote)
    }

    addQuote() {
        quotesService.addQuote()
    }


}