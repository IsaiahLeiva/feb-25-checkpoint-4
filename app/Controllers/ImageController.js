import { ProxyState } from "../AppState";



function _displayImage() {
    document.getElementById('images').innerHTML = ProxyState.images.Template
}

export class ImageController {
    constructor() {
        console.log('[Images Controller]');
        ProxyState.on('images', _displayImage)
        this.addImage()
    }


}