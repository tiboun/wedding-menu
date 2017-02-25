import { Component } from '@angular/core';
import { Form } from './form';
import { FormPresenceService } from '../form-presence.service';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FormPresenceService, Configuration]
})
export class HomeComponent {
    form: Form;
    formOk: Boolean;
    formError: Boolean;
    waiting: Boolean;

    constructor(private _formPresenceService:FormPresenceService) {
      this.form = new Form();
      this.formOk = false;
      this.formError = false;
      this.waiting = false;
    }
    
    onSubmit() {
      this.waiting = true
      this._formPresenceService
     .insert(this.form)
     .subscribe((data:Form) => console.log(data),
                 error => {
                   this.waiting = false; 
                   this.formError = true
                  },
                 () => {
                   this.waiting = false;
                   this.formOk = true
                   this.form = new Form()
                 });
    }

    getJourRestant () {
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var firstDate = new Date();
      var secondDate = new Date(2017, 6, 1);

      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      return diffDays
    }
}
