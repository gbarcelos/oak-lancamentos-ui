import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

import { SharedModule } from './../shared/shared.module';

import { CategoriaPesquisaComponent } from './categoria-pesquisa/categoria-pesquisa.component';
import { RouterModule } from '@angular/router';
import { CategoriaRoutingModule } from './categoria-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,

    SharedModule,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaPesquisaComponent],
  exports: [CategoriaPesquisaComponent]
})
export class CategoriaModule { }
