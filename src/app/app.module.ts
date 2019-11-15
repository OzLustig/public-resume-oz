import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav-component/nav-component.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { ContactComponent } from './contact/contact.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SayHelloNavigationComponent } from './say-hello-navigation/say-hello-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    SkillsComponent,
    RecentWorkComponent,
    ContactComponent,
    MainPageComponent,
    PageNotFoundComponent,
    SayHelloNavigationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
