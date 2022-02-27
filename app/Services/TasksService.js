import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { todosApi } from "./AxiosService.js"



class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    //NOTE: go over the taskData
    async createTask(taskData) {
        const res = await todosApi.post('', taskData)
        const task = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.tasks)
    }


    async getTasks() {
        const res = await todosApi.get()
        console.log('[getTasks]', res.data);
        //NOTE: go over map
        ProxyState.tasks = res.data.map(t => new Task(t))
    }

}

export const tasksService = new TasksService()