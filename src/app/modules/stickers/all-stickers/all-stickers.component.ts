import { Component, OnInit } from '@angular/core';
import { StickersService } from '../../service/stickers/stickers.service';

@Component({
  selector: 'app-all-stickers',
  templateUrl: './all-stickers.component.html',
  styleUrls: ['./all-stickers.component.scss'],
})
export class AllStickersComponent implements OnInit {
  stickers: any[] = [];
  searchSticker: { search: string } = {
    search: '',
  };
  constructor(private stickerService: StickersService) {}

  ngOnInit(): void {
    this.getTrendingStickers();
  }

  getSearchTerm(value: any) {
    this.searchSticker = value;
    this.getStickers(this.searchSticker.search);
  }

  getStickers(searchItem: string) {
    this.stickerService.searchSticker(searchItem).subscribe((r) => {
      this.stickers = r.data;
      console.log(this.stickers);
    });
  }

  getTrendingStickers() {
    this.stickerService.trendingSticker().subscribe((r) => {
      this.stickers = r.data;
      console.log(this.stickers);
    });
  }
}
