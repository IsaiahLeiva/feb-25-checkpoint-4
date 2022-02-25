import Quote from "../Models/Quote";


class QuotesService {
    async getQuote() {
        ProxyState.quotes = [...ProxyState.quotes, new Quote({ quote: Math.random() })]
    }


}

export const quotesService = new QuotesService();