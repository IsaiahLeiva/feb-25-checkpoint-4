import Quote from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js";


class QuotesService {
    async getQuote() {
        const res = await quoteApi.get()
        console.log(res.data);
    }


}

export const quotesService = new QuotesService();