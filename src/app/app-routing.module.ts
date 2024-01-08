import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCalenderComponent } from './course-calender/course-calender.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/Search', pathMatch: 'full'}, 
{ path: 'Search', component: SearchComponent},
{ path: 'courseCalender/:signatur', component: CourseCalenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
