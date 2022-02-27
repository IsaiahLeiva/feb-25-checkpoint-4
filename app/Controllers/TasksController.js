import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"


export class TasksController {
    constructor() {
        console.log("hello");
    }

    async createTask() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let taskData = {
                description: form.name.value
            }
            tasksService.createTask(taskData)
        } catch (error) {
            console.error(error);
        }
    }

}


