import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTaskData } from '../task/task.model';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  // This is how we inject the service into the component
  // Making it private creates a instance var for this class
  constructor(private tasksService: TasksService) {}

  // @Input({ required: true }) name!: string; // uses ! to stop TS from complaining about no initial value
  @Input({ required: true }) name!: string | undefined; // undefined is used to indicate that the value is not set yet, allows for multiple types
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  
  
  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
    // this.tasks = this.tasks.filter(task => task.id !== id);
  }

  get selectedUserTasks() {
    return this.tasksService.selectedUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
