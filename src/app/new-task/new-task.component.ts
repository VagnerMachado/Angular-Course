import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancelAddTask = new EventEmitter<void>();

  onCancelAddTask() {
    this.cancelAddTask.emit();
  }
}
