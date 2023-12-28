import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-course-calender',
  templateUrl: './course-calender.component.html',
  styleUrl: './course-calender.component.css'
})
export class CourseCalenderComponent implements OnInit {
  constructor(private BackendService: BackendService){}
  dataSource = new MatTableDataSource(); 
  displayedColumns: string[] = ['title', 'start_at', 'end_at', 'location_name', 'location_adress']; 

 ngOnInit(){
  this.getCalenderEventList();
    }
  
  SparatillCanvas(dataSource : any){
    this.BackendService.postCanvasKalender(this.dataSource).subscribe((response: any) =>{
      this.getCalenderEventList();
    })
  }
  getCalenderEventList(){
  this.BackendService.getKursList().subscribe((response: any) => {
    this.dataSource.data = response; 

    });
  }
}
