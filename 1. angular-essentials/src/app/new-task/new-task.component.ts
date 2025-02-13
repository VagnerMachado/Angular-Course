import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], //prevents the form to be sent to server. allows for ngModel 2 way binding
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;
  @Output() cancelAddTask = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  // This is how we inject the service into the component, alternative to constructor in tasks.ts
  private taskService = inject(TasksService)


  onCancelAddTask() {
    this.cancelAddTask.emit();
  }

  addNewTaskEmitter() {
    console.log('submitted');
    if (this.enteredTitle.length === 0 || this.enteredSummary.length === 0 || this.enteredDueDate.length === 0) {
      return;
    }
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId);
    this.cancelAddTask.emit();
  }
}
