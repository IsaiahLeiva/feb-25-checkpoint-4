


class todotasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
    createTask(newTask) {
        const task = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.tasks)
    }

}

export const tasksService = new TasksService()