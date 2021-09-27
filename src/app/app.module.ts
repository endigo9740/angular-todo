import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { InnerComponent } from './views/inner/inner.component';
import { FormComponent } from './views/form/form.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InnerComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        // Routes
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
