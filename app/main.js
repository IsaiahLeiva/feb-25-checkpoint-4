import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  tasksController = new TasksController()
  clockController = new ClockController()
  quotesController = new QuotesController()
  weatherController = new WeatherController()
  imageController = new ImageController()
}

window["app"] = new App();


