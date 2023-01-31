import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Incredible To Do App';
  thingsToDo =[
    'Learn javascript',
    'Learn Angular',
    'Learn Redux'
  ];
  thingsCompleted=[];

  TaskSummary():string{
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} completed`;
  }

  constructor() {
    setInterval(() => {
      this.thingsToDo.push('make coffee');
    },5000);
  }
}
