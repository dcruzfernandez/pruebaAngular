import { NgModule } from '@angular/core';
import { ListTodosComponent } from './components/list/list-todo.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [
        ListTodosComponent
    ],
    declarations: [
        ListTodosComponent
    ],
    providers: [],
})
export class TodosModule { }
