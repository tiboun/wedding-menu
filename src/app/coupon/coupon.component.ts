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

  constructor(private _couponService:CouponService) {
    this.coupon = new Coupon()
  }

  onSubmit () {
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
                 error => console.log(error),
                 () => console.log('Insert item'));
  }
}
