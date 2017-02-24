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

    constructor(private _formPresenceService:FormPresenceService) {
      this.form = new Form();
    }
    
    onSubmit() {
      this._formPresenceService
     .insert(this.form)
     .subscribe((data:Form) => console.log(data),
                 error => console.log(error),
                 () => console.log('Insert item'));
    }

    getJourRestant () {
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var firstDate = new Date();
      var secondDate = new Date(2017, 6, 1);

      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      return diffDays
    }
}
