import { Component, OnInit } from '@angular/core';
import { GifsService } from './../../service/gifs/gifs.service';

@Component({
  selector: 'app-all-gifs',
  templateUrl: './all-gifs.component.html',
  styleUrls: ['./all-gifs.component.scss'],
})
export class AllGifsComponent implements OnInit {
  trendingGiphs!: any[];

  searchGif: { search: string } = {
    search: '',
  };
  constructor(private gifService: GifsService) {}

  ngOnInit(): void {
    this.getTrendingGifs();
  }
  getSearchTerm(value: any) {
    this.searchGif = value;
    this.getGifs(this.searchGif.search);
  }

  getGifs(searchItem: string) {
    this.gifService.searchGif(searchItem).subscribe((r) => {
      this.trendingGiphs = r.data;
      console.log(this.trendingGiphs);
    });
  }

  getTrendingGifs() {
    this.gifService.trendingGif().subscribe((r) => {
      this.trendingGiphs = r.data;
      console.log(this.trendingGiphs);
    });
  }
}
