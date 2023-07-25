import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplianceGroupComponent } from './appliance-group/appliance-group.component';
import { TileComponent } from './common/components/tile/tile.component';
import { ButtonBarComponent } from './common/button-bar/button-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplianceEditorComponent } from './appliance-editor/appliance-editor.component';
import { ErrorMessageComponent } from './common/components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplianceGroupComponent,
    TileComponent,
    ButtonBarComponent,
    ApplianceEditorComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
