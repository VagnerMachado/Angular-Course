import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TasksComponent, NewTaskComponent, TaskComponent],
    exports: [TasksComponent], //only componnet that needs to be used in other componenets that use this module
    imports: [FormsModule, CommonModule, SharedModule]
})

export class TaskModule { }