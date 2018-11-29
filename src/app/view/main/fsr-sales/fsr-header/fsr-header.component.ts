import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fsr-header',
  templateUrl: './fsr-header.component.html',
  styleUrls: ['./fsr-header.component.scss']
})
export class FsrHeaderComponent implements OnInit {

  @Input() fsrHeader;

  constructor() { }

  ngOnInit() {
  }

}
