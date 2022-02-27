import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { todosApi } from "./AxiosService.js"



class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    async createTask(newTask) {
        const res = await todosApi.post('')
        const task = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.tasks)
    }

}

export const tasksService = new TasksService()