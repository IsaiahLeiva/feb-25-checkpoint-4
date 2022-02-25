

export class TodoTask {
    constructor(data) {
        this.id = data.id || generateID()
        this.name = data.name
        this.checkbox = data.checkbox || true
    }

    get Template() {
        return `
        <input type="checkbox" name="list item checkbox" id=""><li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `
    }

}