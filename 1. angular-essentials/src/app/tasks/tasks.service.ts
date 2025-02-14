import { Injectable } from "@angular/core";
import { NewTaskData } from "../task/task.model";

// Indicates that this sevice can be injected into other services
@Injectable({ providedIn: 'root' })
export class TasksService
{
    constructor() {
        const tasks = localStorage.getItem('tasks');
        if(tasks)
        {
            this.tasks = JSON.parse(tasks);
        }
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ];
    
    selectedUserTasks(userId : string) {
        return this.tasks.filter((task) => task.userId === userId);
    }
    
    addTask(taskData : NewTaskData, userId : string) {
        this.tasks.push({
          id: Math.random().toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(taskId : string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }
}