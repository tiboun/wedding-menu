import { Component } from '@angular/core';

import { Questions }                from './questions';

import { QuestionsService } from '../questions.service';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionsService, Configuration]

})
export class QuestionsComponent {
  questions: Questions;
  formOk: Boolean;
  formError: Boolean;
  waiting: Boolean;

  create() {
    this.questions = new Questions()
    this.questions.coca = false;
    this.questions.eau_gazeuse = false;
    this.questions.vin_blanc = false;
    this.questions.vin_rouge = false;
    this.questions.eau_plate = false;
    this.questions.fromage = false;
    this.questions.jus_fruit = false;
  }

  constructor(private _questionsService: QuestionsService) {
    this.create();
    this.formOk = false;
    this.formError = false;
    this.waiting = false;
  }

  onSubmit() {
    this.waiting = true;
    this._questionsService
     .insert(this.questions)
     .subscribe((data:Questions) => console.log(data),
                 error => {
                   this.waiting = false; 
                   this.formError = true
                  },
                 () => {
                   this.waiting = false;
                   this.formOk = true
                 });
  }

  reset() {
    this.create();
  }
}
