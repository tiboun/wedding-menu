import { Component } from '@angular/core';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [Configuration]
})
export class ContactComponent {

    constructor() {
    }
}
