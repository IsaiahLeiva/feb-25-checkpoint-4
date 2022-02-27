import { ProxyState } from "../AppState.js";


class ImagesService {
    displayImage() {
        ProxyState.images = [...ProxyState.images, new Image]
    }
}

export const imagesService = new ImagesService();