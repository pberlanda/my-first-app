import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent // nuovi componenti vanno registrati qui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
