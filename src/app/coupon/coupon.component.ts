import { Component } from '@angular/core';

import { Coupon }                from '../coupon';
import { CouponService }         from './coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css'],
  providers: [CouponService]
})
export class CouponComponent {
  coupon: Coupon;
  entree: String;
  plat: String;

  constructor(private couponService: CouponService) {
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

    this.couponService.insert(this.coupon);
  }
}
