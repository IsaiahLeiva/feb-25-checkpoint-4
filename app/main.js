import { ClockController } from "./Controllers/ClockController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";

class App {
  tasksController = new TasksController()
  clockController = new ClockController()
  quotesController = new QuotesController()
}

window["app"] = new App();


