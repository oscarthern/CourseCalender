import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseCalenderComponent } from './course-calender/course-calender.component';
import { SearchComponent } from './search/search.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    
  declarations: [
    AppComponent,
    CourseCalenderComponent,
    SearchComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    RouterOutlet,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: 
      {appearance: 'outline', 
      floatLabel: 'auto'},
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
