import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, mergeMap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface CustomerDialogData {
  name: string;
  customerCode: string;
  customerName: string;
  brand: string;
  customerLabel: string;
}

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;


  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerDialogData,
    private http: HttpClient) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        debounceTime(500),
        mergeMap((value) => {
          return this.http.post<any>('http://localhost:10010/fetchTableFind/genCustomerContains?isMultiple=true&pageSize=200', {
            customer_cd: value
          });
        }),
        map(res => res.map(item => item.customerCd)),
      );
  }

  onCancel() {
    this.dialogRef.close();
  }
}
