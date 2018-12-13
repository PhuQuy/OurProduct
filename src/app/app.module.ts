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
import { DownloadCardComponent } from './components/_model/cards/download-card/download-card.component';
import { ListingComponent } from './components/listing/listing.component';
import { MattersComponent } from './components/matters/matters.component';
import { TipsComponent } from './components/tips/tips.component';
import { ContactComponent } from './routes/contact/contact.component';
import { TalkingComponent } from './components/talking/talking.component';
import { SupportComponent } from './components/support/support.component';
import { AboutComponent } from './routes/about/about.component';
import { IntroComponent } from './components/intro/intro.component';
import { VideoBoxComponent } from './components/video-box/video-box.component';
import { CategoryComponent } from './routes/category/category.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ItemComponent } from './components/_model/cards/item/item.component';


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
    ListingComponent,
    MattersComponent,
    TipsComponent,
    ContactComponent,
    TalkingComponent,
    SupportComponent,
    AboutComponent,
    IntroComponent,
    VideoBoxComponent,
    CategoryComponent,
    GalleryComponent,
    ItemComponent
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
