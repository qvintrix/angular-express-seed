import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
