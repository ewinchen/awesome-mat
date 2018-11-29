import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fsr-sales',
  templateUrl: './fsr-sales.component.html',
  styleUrls: ['./fsr-sales.component.scss']
})
export class FsrSalesComponent implements OnInit {

  fsrList = [];
  fsrHeader = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<{ type: boolean, data: any }>('http://localhost:10010/listby/fsr?pageSize=-1', { projections: 'header.fSRNo' })
      .subscribe(res => this.fsrList = res.data);
  }

  onSelectFsr(fsrId) {
    this.http.get<any>(`http://localhost:10010/show/fsr/${fsrId}`)
      .subscribe(res => this.fsrHeader = res.data.header);
  }

}
