import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionComponent } from './modules/about-us/mission/mission.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MissionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    RippleModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
  ],
})
export class AppModule {}
