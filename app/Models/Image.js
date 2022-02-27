

export class Image {
    constructor(data) {
        this.id = data.id
        this.imgURL = data.imgURL
        this.author = data.author
        this.query = data.query
    }

    get Template() {
        return `
        <p style="background-image: url('${this.imgURL}');">
        `
    }
}