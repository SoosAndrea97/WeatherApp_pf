import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import { CITIES, City } from "../data/cities";
import { SearchService, WeatherRow } from "./search.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  cities: City[] = CITIES;
  selected: City|undefined;
  displayedColumns: string[] = ['date', 'time', 'temp'];
  dataSource = new MatTableDataSource();

  constructor(private service: SearchService) {
  }

  public ngOnInit(): void {
  }
  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  public updateResults(city: City): void {
    this.dataSource.data = this.service.getWeatherByCity(city);
    this.paginator.length = this.dataSource.data.length;
    // TODO set results
  }
}
