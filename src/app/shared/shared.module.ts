import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SharedLibsModule, SharedCommonModule, HasAnyAuthorityDirective} from './';

@NgModule({
  imports: [SharedLibsModule, SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  entryComponents: [],
  exports: [SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
