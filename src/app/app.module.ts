import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ppcomponent} from './pipes.component';


@NgModule({
declarations: [
      AppComponent,
ppcomponent
],
imports: [
BrowserModule,
AppRoutingModule,

],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }
