import { NgModule } from '@angular/core';

import { ErrorMsjDirective } from './directivas/error-msj.directive';
import { CoustomIfDirectivaDirective } from './directivas/coustom-if-directiva.directive';



@NgModule({
  declarations: [
    ErrorMsjDirective,
    CoustomIfDirectivaDirective
  ],
  exports: [
    ErrorMsjDirective,
    CoustomIfDirectivaDirective
  ]
})
export class SharedModule { }
