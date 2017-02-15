import { Component } from '@angular/core';

import { Coupon }                from '../coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
  coupon: Coupon;
  accompagnateur : boolean;

  constructor() {
    this.coupon = new Coupon()
    this.accompagnateur = false;
  }
}
