// Import necessary Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import the main component
import { AppComponent } from './app.component';

// Import your custom modules
import { AppDemo } from './MyComp/demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDemo
  ],
  imports: [
    // Import Angular modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
