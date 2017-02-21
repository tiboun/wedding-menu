import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  }   from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CouponComponent } from './coupon/coupon.component';
import { QuestionsComponent } from './questions/questions.component';
import { DinerComponent } from './diner/diner.component';
import { ListeMariageComponent } from './liste_mariage/liste_mariage.component';
import { ListeInvitesComponent } from './liste_invites/liste_invites.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InfoComponent,
    CouponComponent,
    QuestionsComponent,
    DinerComponent,
    ListeMariageComponent,
    ListeInvitesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'menu',
        component: MenuComponent
      },
      {
        path:'info',
        component: InfoComponent
      },
      {
        path:'questions',
        component: QuestionsComponent
      },
      {
        path:'coupon',
        component: CouponComponent
      },
      {
        path:'diner',
        component: DinerComponent
      },
      {
        path:'liste_mariage',
        component: ListeMariageComponent
      },
      {
        path:'liste_invites',
        component: ListeInvitesComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])

  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
