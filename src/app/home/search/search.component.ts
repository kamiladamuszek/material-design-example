import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GithubService} from '../../services/github.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Repository} from '../../interfaces/repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit, AfterViewInit {

  username: string;
  showSearchBox: Boolean;
  dupa;
  repositoryData: Repository[] = [];
  dataSource = new MatTableDataSource(this.repositoryData);
  displayedColumns = ['name', 'pushed_at', 'actions_column'];

  constructor(private github: GithubService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.resetAll();
  }

  resetAll() {
    this.username = '';
    this.showSearchBox = true;
  }

  showContents() {
    this.github.getRepositiories(this.username).subscribe(
      data => {
        this.dupa = data;
        this.dataSource = new MatTableDataSource<Repository>(this.dupa);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.showSearchBox = false;
      },
      err => {
        this.showSearchBox = true;
      }
    );
  }

  filter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: Repository, filter: string) => {
      return (data.name.indexOf(filter) !== -1 || data.pushed_at.toString().indexOf(filter) !== -1);
    };
    this.dataSource.filter = filterValue;
  }

}
