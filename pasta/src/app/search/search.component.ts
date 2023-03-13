import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  url: string = "https://world.openfoodfacts.org/cgi/search.pl?search_terms=pizza&page_size=2&json=true";
  
}
