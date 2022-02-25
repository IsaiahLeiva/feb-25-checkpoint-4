import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"


export class TasksController {
    createTask(TaskID, event) {
        console.log('creating a task');
        console.log(event.target)
        window.event.preventDefault()

        const form = window.event.target

        const newTask = {
            TaskID,
            name: form.taskname.value
        }
        console.log(event.target.parentNode)
        event.target.parentNode.innerHTML += `<div class='testing'></div>`
        console.log("[TaskController]: createTask", newTask)
        tasksService.createTask(newTask)
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            tasksService.deleteTask(id)
        }
    }
}