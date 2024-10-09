import { NgModule } from '@angular/core';
import { ListTodosComponent } from './components/list/list-todo.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        
        CommonModule 
    ],
    exports: [
        ListTodosComponent
    ],
    declarations: [
        ListTodosComponent
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ],
})
export class TodosModule { }
