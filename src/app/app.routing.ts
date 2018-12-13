import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { LogInComponent } from './routes/log-in/log-in.component';
import { ContactComponent } from '@app/routes/contact/contact.component';
import { AboutComponent} from '@app/routes/about/about.component';
import { CategoryComponent} from '@app/routes/category/category.component';
import { ItemDetailComponent } from '@app/components/_model/cards/item/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'item-detail', component: ItemDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
