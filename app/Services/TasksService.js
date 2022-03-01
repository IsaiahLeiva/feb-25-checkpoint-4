import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { todosApi } from "./AxiosService.js"



class TasksService {
    async deleteTask(id) {
        const res = await todosApi.delete('' + id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }

    async createTask(taskData) {
        const res = await todosApi.post('', taskData)
        const task = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.tasks)
    }


    async getTasks() {
        const res = await todosApi.get()
        console.log('[getTasks]', res.data);
        ProxyState.tasks = res.data.map(t => new Task(t))
    }

    async taskDone(id) {
        let myTask = ProxyState.tasks.find(t => t.id == id)
        myTask.completed = !myTask.completed
        console.log(myTask);
        //REVIEW: Ask about line below-As seen on gregslist
        const res = await todosApi.put('' + id, myTask)
        ProxyState.tasks = ProxyState.tasks
    }

}

export const tasksService = new TasksService()