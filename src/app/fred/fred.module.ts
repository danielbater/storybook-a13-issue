import { NgModule } from '@angular/core';

import { BarneyModule } from '../barney/barney.module';
import { FredComponent } from './fred.component';

@NgModule({
  imports: [BarneyModule],
  declarations: [FredComponent],
  exports: [FredComponent],
})
export class FredModule {}
