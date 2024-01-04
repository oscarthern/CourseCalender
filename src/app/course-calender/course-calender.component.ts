import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-course-calender',
  templateUrl: './course-calender.component.html',
  styleUrl: './course-calender.component.css'
})
export class CourseCalenderComponent implements OnInit {
  constructor(private BackendService: BackendService){}
  dataSource = new MatTableDataSource(); 
  displayedColumns: string[] = ['title', 'start_at', 'end_at', 'location_name', 'location_address']; 

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

 ngOnInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.getCalenderEventList();
    }
  
  SparatillCanvas(){
    this.BackendService.postCanvasKalender(this.dataSource.data).subscribe((response: any) =>{
      this.getCalenderEventList();
    })
    
  }
  getCalenderEventList(){
  this.BackendService.getKursList().subscribe((response: any) => {
    this.dataSource.data = response; 
    });
  }
}
