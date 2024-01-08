import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { SearchData } from '../search-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  selectedValue!: string;
  panelsToShow = 12;
  searchData: any;
  searchTerm = '';
  filteredSearchData: any[] = [];
  
  constructor(private router: Router, private BackendService: BackendService) { }

   ngOnInit(): void {
      this.getSearchData();
      }

      navigateToCourseCalender(signatur: string) {
        console.log('navigate to course calendar with signatur ', signatur);
        this.router.navigate(['courseCalender/' + signatur])
      }

      getSearchData() {
        
        this.BackendService.getSearchData().subscribe(data => {
          this.searchData = data.map((item: { id: number; kommentar: string; kurskod: string; namn: string; signatur: string; specBenamning: string; }) => {
            return {
              id: item.id,
              kommentar: item.kommentar,
              kurskod: item.kurskod,
              namn: item.namn,
              signatur: item.signatur,
              specBenamning: item.specBenamning
            };
          });
          this.filteredSearchData = [...this.searchData];
        });
       }

  search() {
    if (this.searchTerm.trim() === '') {
      this.filteredSearchData = [...this.searchData];
    } else {
      this.filteredSearchData = this.searchData.filter((item: SearchData) =>
        Object.keys(item).some((key) =>
          String((item as any)[key]).toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    }
  }
}
