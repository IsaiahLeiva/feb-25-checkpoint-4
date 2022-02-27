import { generateId } from "../Utils/generateId.js"


export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.description = data.description
        this.completed = data.completed
        this.user = data.user
    }

    get Template() {
        return `
        <div>
        <input type="checkbox" name="list item checkbox" id=""><li class="d-flex justify-content-between">${this.description} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        </div>
        `
    }

}