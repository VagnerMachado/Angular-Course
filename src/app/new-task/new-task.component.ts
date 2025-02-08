import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule], //prevents the form to be sent to server. allows for ngModel 2 way binding
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancelAddTask = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  onCancelAddTask() {
    this.cancelAddTask.emit();
  }

  addNewTaskEmitter() {
    console.log('submitted');
    if (this.enteredTitle.length === 0 || this.enteredSummary.length === 0 || this.enteredDueDate.length === 0) {
      return;
    }
    this.addNewTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    });
  }
}
