// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [TranslateModule.forRoot()],
  exports: [TranslateModule],
})
export class TranslateTestingModule {}
