import { generateId } from "../Utils/generateId"




export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.checkbox = data.checkbox || true
        this.listId = data.listId
    }

    get Template() {
        return `
        <input type="checkbox" name="list item checkbox" id=""><li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `


    }

}