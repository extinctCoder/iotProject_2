import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { PubNubAngular } from 'pubnub-angular2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LiveUpdateComponent } from './element/live-update/live-update.component';
import { ForceUpdateComponent } from './element/force-update/force-update.component';
import { HomeComponent } from './element/home/home.component';
import { NotFoundComponent } from './element/not-found/not-found.component';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.0.104',
  port: 9001,
  path: '/mqtt'
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'live-update', component: LiveUpdateComponent },
  { path: 'force-update', component: ForceUpdateComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LiveUpdateComponent,
    ForceUpdateComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [
    DataService,
    PubNubAngular
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
