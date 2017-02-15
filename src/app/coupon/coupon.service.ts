import { Injectable } from '@angular/core';

import { Coupon } from '../coupon';

@Injectable()
export class CouponService {

    insert(coupon: Coupon): void {
        console.log(coupon);
    }
}