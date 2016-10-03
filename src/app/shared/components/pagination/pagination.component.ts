import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pagination-cmp',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getPages(): Array<number> {
    let pages: Array<number> = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.pageChanged.emit(this.currentPage);
  }

}
