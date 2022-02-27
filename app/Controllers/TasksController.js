import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"


function _drawTask() {
    let Template = ''
    ProxyState.tasks.forEach(t => Template += t.Template)
    document.getElementById('todo-list').innerHTML = Template
}

async function getTasks() {
    try {
        await tasksService.getTasks()
    } catch (error) {
        console.error(error);
    }
}

export class TasksController {
    constructor() {
        console.log("hello");
        ProxyState.on('tasks', _drawTask)
        getTasks()
    }

    async createTask() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let taskData = {
                description: form.name.value
            }
            await tasksService.createTask(taskData)
        } catch (error) {
            console.error(error);
        }
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            tasksService.deleteTask(id)
        }
    }
}


