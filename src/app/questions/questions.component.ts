import { Component } from '@angular/core';

import { Questions }                from './questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions: Questions;

  constructor() {
    this.questions = new Questions()
  }

  onSubmit() {
    console.log(this.questions)
  }
}
