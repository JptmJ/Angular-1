import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular App';

  constructor() {
    // setTimeout(() => {
    //   this.title = "New Title"
    // }, 2000);
  }
}
