import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { imagesApi } from "./AxiosService.js";


export class ImagesService {
    async addImage() {
        const res = await imagesApi.get()
        console.log(res.data)
        ProxyState.images = new Image(res.data)
        document.body.style.backgroundImage = `url(${ProxyState.images.imgURL})`
    }
}

export const imagesService = new ImagesService();