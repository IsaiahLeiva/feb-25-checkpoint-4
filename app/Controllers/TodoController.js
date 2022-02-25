


export class todoController {
    createTodoTask(taskID) {
        console.log('creating todo task');
        console.log(taskID.target);
        window.event.preventDefault()

        const form = window.event.target

        const newTodoTask = {
            taskID,
            name: form.todotask.target
        }
        console.log(event.target.parentNode);
        event.target.parentNode.innerHTML += `<div class = 'testing'></div>`
        console.log("[TodoController]: createTodo", newTodo);
        todosService.createTodoTask(newTodo)
    }

    //TODO: add async deleteTodo
}