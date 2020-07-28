import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [AppComponent, HelloComponent, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
