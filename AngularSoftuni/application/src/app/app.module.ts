import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
 
import { RightComponent } from './right/right.component';
import { FooterComponent } from './core/footer/footer.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RightComponent
    
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule
       
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
