import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonsFormComponent } from './persons-form/persons-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({ declarations: [
        AppComponent,
        PersonsComponent,
        PersonsFormComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
