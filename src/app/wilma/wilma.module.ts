import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { WilmaComponent } from './wilma.component';

@NgModule({
  imports: [MatSliderModule],
  declarations: [WilmaComponent],
  exports: [WilmaComponent],
})
export class WilmaModule {}
