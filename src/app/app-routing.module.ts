import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  { path:'departments',component:DepartmentListComponent},
  { path:'student',component:StudentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DepartmentListComponent,StudentsListComponent]
