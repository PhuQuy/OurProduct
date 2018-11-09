import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './routes/sign-up/sign-up.component';
import { LogInComponent } from './routes/log-in/log-in.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { NewTemplatesComponent } from './components/templates/new-templates/new-templates.component';
import { TechnologyComponent } from './components/technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    TemplatesComponent,
    NewTemplatesComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,

    RouterModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
