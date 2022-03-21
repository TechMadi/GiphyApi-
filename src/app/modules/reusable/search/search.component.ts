import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});

  @Output() searchTerm = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: new FormControl(''),
    });
  }

  search(model: any) {
    console.log(model.value);
    this.searchTerm.emit(model.value);
  }
}
