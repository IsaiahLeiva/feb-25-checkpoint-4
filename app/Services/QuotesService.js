import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js";

export class QuotesService {
    async addQuote() {
        const res = await quoteApi.get()
        //NOTE: Go over line 9 and how it works
        console.log(res.data)
        ProxyState.quotes = new Quote(res.data)
        ProxyState.quotes = ProxyState.quotes
        console.log(ProxyState.quotes);
    }


}

export const quotesService = new QuotesService();