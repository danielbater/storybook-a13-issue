import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DummyComponent } from './dummy/dummy.component';
import { FredModule } from './fred/fred.module';
import { BarneyModule } from './barney/barney.module';
import { WilmaModule } from './wilma/wilma.module';

@NgModule({
  declarations: [AppComponent, DummyComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FredModule,
    BarneyModule,
    WilmaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
