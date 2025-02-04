import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({ required: true }) name!: string; // uses ! to stop TS from complaining about no initial value
  @Input({ required: true }) name: string | undefined; // undefined is used to indicate that the value is not set yet, allows for multiple types

  
}
