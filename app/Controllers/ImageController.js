import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesServices.js";


async function addImage() {
    try {
        await imagesService.addImage()
    } catch (error) {
        console.error(error);
    }
}

export class ImageController {
    constructor() {
        console.log('[Images Controller]');
        addImage()
    }


}