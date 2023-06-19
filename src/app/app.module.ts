import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplianceGroupComponent } from './appliance-group/appliance-group.component';
import { TileComponent } from './common/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplianceGroupComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
