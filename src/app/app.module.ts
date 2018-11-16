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
import { DownloadCardComponent } from './components/model/download-card/download-card.component';
import { ListingComponent } from './components/listing/listing.component';


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
    DownloadCardComponent,
    TechnologyComponent,
    ListingComponent
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
