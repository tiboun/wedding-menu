import { Component } from '@angular/core';

import { Coupon }                from './coupon';
import { CouponService }         from '../coupon.service';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
  providers: [CouponService, Configuration]
})
export class CouponComponent {
  coupon: Coupon;
  entree: String;
  plat: String;
  formOk: Boolean;
  formError: Boolean;
  waiting: Boolean;

  constructor(private _couponService:CouponService) {
    this.coupon = new Coupon()
    this.formOk = false;
    this.formError = false;
    this.waiting = false;
  }

  onSubmit () {
    this.waiting = true
    this.coupon.tarte_magret_fume = (this.entree === "magret");
    this.coupon.tartare_saumon = (this.entree === "saumon");
    this.coupon.tatin_legumes = (this.entree === "legumes");

    this.coupon.pintade = (this.plat === "pintade");
    this.coupon.boeuf = (this.plat === "boeuf");
    this.coupon.lasagnes = (this.plat === "lasagnes");
    this.coupon.pizza = (this.plat === "pizza");

    this._couponService
     .insert(this.coupon)
     .subscribe((data:Coupon) => console.log(data),
                 error => {
                   this.waiting = false; 
                   this.formError = true
                  },
                 () => {
                   this.waiting = false;
                   this.formOk = true;
                   this.coupon = new Coupon()
                   this.entree = ''
                   this.plat = ''
                 });
  }

  reset() {
    this.coupon = new Coupon()
  }
}
