import Quote from "../Models/Quote.js";


class QuotesService {
    async getQuote() {
        ProxyState.quotes = [...ProxyState.quotes, new Quote({ quote: Math.random() })]
    }


}

export const quotesService = new QuotesService();