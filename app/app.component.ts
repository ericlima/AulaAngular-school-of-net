import { Component,Input } from '@angular/core';

var TASKS:Task[] = [
  {id: 1, name: "um"},
  {id: 2, name: "dois"},
  {id: 3, name: "tres"},
  {id: 4, name: "quatro"},
  {id: 5, name: "cinco"},
  {id: 6, name: "seis"},
  {id: 7, name: "sete"},
  {id: 8, name: "oito"},
]

export class Task {
  id: number;
  name: string;
}

@Component({
  selector: 'task-edit',
  template: `
  <div *ngIf="task">
    <input type="text" [(ngModel)]="task.name"/>
  </div>
  `
})
export class TaskEdit {
  @Input()
  task: Task;
}


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title.name}}</h1>
  <input type="text" [(ngModel)]="title.name"/>

  <ul>
  <li *ngFor="let t of tasks" (click)="onClick(t)">
    {{t.id}}, {{t.name}}
  </li>
  </ul>

  <task-edit [task]="selectedTask"></task-edit>
  `,
  directives: [TaskEdit]
})

export class AppComponent {
  title = {
    name : "hello world",
    description : "oie"
  }
  selectedTask: Task;

  tasks: Task[] = TASKS;

  onClick(task) {
    this.selectedTask = task
  }

}
