import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptor } from './seguranca/jwt-http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    CoreModule,
    AppRoutingModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
