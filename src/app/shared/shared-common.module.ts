import { NgModule } from '@angular/core';

import { SharedLibsModule} from './';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [],
  exports: [SharedLibsModule]
})
export class SharedCommonModule {}
