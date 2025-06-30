// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalConfirmComponent } from './modal-confirm.component';

@NgModule({
  declarations: [ModalConfirmComponent],
  imports: [ModalModule, TranslateModule],
  exports: [ModalConfirmComponent],
})
export class ModalConfirmModule {}
