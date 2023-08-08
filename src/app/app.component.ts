import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TutorialProject';
  constructor (private router: Router ){}

  teacherClicked() {
    this.router.navigate(['teacher'])
  }

  studentClicked() {
    this.router.navigate(['student'])
  }
}
