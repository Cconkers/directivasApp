import { NgModule } from '@angular/core';

import { ErrorMsjDirective } from './directivas/error-msj.directive';



@NgModule({
  declarations: [
    ErrorMsjDirective
  ],
  exports: [
    ErrorMsjDirective
  ]
})
export class SharedModule { }
