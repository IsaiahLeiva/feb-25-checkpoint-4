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
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.taskDone('${this.id}')"><li class="d-flex text-shadow">${this.description} <i class="mdi mdi-delete" title="Delete ${this.description}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        </div>
        `
    }

}