import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fsr-list',
  templateUrl: './fsr-list.component.html',
  styleUrls: ['./fsr-list.component.scss']
})
export class FsrListComponent implements OnInit {

  @Input() dataSource;
  @Output() selectFsr: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectFsr(rowData) {
    this.selectFsr.emit(rowData._id);
  }

}
