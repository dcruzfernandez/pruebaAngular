import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
    imports: [
        CommonModule // permite usar directivas
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    declarations: [
        HeroComponent,
        ListComponent
    ],
    providers: [],
})
export class HeroesModule { }
