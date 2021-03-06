import { Component, OnInit } from '@angular/core';
import { Configuration } from '../configuration';

import { FormPresenceService } from '../form-presence.service';
import { QuestionsService } from '../questions.service';
import { CouponService } from '../coupon.service';

import { Coupon } from '../coupon/coupon';
import { Form } from '../home/form';
import { Questions } from '../questions/questions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FormPresenceService, QuestionsService, CouponService, Configuration]
})
export class AdminComponent implements OnInit {
    coupons: Coupon[];
    forms: Form[];
    questions: Questions[];

    constructor(private _formPresenceService:FormPresenceService,
                private _questionsService: QuestionsService,
                private _couponService: CouponService) {
    }
    
    ngOnInit(): void {
      this._formPresenceService
      .getAll()
      .subscribe((data:Form[]) => this.forms = data,
                error => console.log(error),
                () => console.log("ok forms presence")
      )

      this._couponService
      .getAll()
      .subscribe((data:Coupon[]) => this.coupons = data,
                error => console.log(error),
                () => console.log("ok coupons")
      )

      this._questionsService
      .getAll()
      .subscribe((data:Questions[]) => this.questions = data,
                error => console.log(error),
                () => console.log("ok questions")
      )
    }

    deleteAll() {
      this._couponService
      .deleteAll()
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))

      this._formPresenceService
      .deleteAll()
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))

      this._questionsService
      .deleteAll()
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))
      
      this.coupons.splice(0)
      this.questions.splice(0)
      this.forms.splice(0)
    }

    deleteCoupon(coupon) {
      this._couponService
      .delete(coupon._id)
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))
      let i = this.coupons.indexOf(coupon)
      this.coupons.splice(i, 1)
    }

    deleteForm(form) {
      this._formPresenceService
      .delete(form._id)
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))
      let i = this.forms.indexOf(form)
      this.forms.splice(i, 1)
    }

    deleteQuestion(question) {
      this._questionsService
      .delete(question._id)
      .subscribe((data: String) => console.log(data),
              error => console.log(error),
              () => console.log("ok"))
      let i = this.questions.indexOf(question)
      this.questions.splice(i, 1)
    }
    // onSubmit() {
    //   this.waiting = true
    //   this._formPresenceService
    //  .insert(this.form)
    //  .subscribe((data:Form) => console.log(data),
    //              error => {
    //                this.waiting = false; 
    //                this.formError = true
    //               },
    //              () => {
    //                this.waiting = false;
    //                this.formOk = true
    //              });
    // }

}
