import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-course-calender',
  templateUrl: './course-calender.component.html',
  styleUrls: ['./course-calender.component.css']
})
export class CourseCalenderComponent implements OnInit {

  constructor(private BackendService: BackendService, private route: ActivatedRoute, private router: Router) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd event:', event);
      }
    });
  }

  dataSource = new MatTableDataSource(); 
  displayedColumns: string[] = ['title', 'start_at', 'end_at', 'location_name', 'location_address']; 

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

 ngOnInit(){
  const signatur = this.route.snapshot.paramMap.get('signatur');
  
  if (signatur != null){
    console.log('11111');
    this.getCalenderEventList(signatur);
    console.log('222222222');
  } 

  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
    }
  
  SparatillCanvas(){
    this.BackendService.postCanvasKalender(this.dataSource.data).subscribe((response: any) => {
    })

  }
  getCalenderEventList(signatur: string) {
    console.log('333');
  this.BackendService.getKursList(signatur).subscribe((response: any) => {
    this.dataSource.data = response; 
    console.log('444');
    });
  }
}
