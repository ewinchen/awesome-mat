import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap, debounceTime, tap, distinctUntilChanged, switchMap, skip } from 'rxjs/operators';
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
  customerCodeControl = new FormControl(this.data.customerCode);
  brandControl = new FormControl(this.data.brand);
  customerLabelControl = new FormControl(this.data.customerLabel);

  thing = {
    name: 'Edwin',
    capacity: 'Strong'
  }

  testControl = new FormControl(this.thing.name);

  customerCodes: Array<any>;
  brands: Array<any>;
  customerLabels: Array<any>;

  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerDialogData,
    private http: HttpClient) { }

  ngOnInit() {
    this.customerCodeControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.data.customerName = '';
        this.data.brand = '';
        this.data.customerLabel = '';
      }),
      switchMap((value) => {
        const getCustomerCodes$ = this.http.post<any>('http://localhost:10010/fetchTableFind/genCustomerContains?isMultiple=true&pageSize=200', {
          customer_cd: value
        });
        const getBrands$ = this.http.post<any>('http://localhost:10010/getBrandByCustomerCode', {
          customer_cd: value
        });
        const getCustomerLabels$ = this.http.post<any>('http://localhost:10010/fetchTableFind/genBrandLabelContains?isMultiple=true&pageSize=200', {
          customer_cd: value,
        });

        return forkJoin(getCustomerCodes$, getBrands$, getCustomerLabels$);
      }),
    ).subscribe(([customerCodes, brands, customerLabels]) => {
      this.customerCodes = customerCodes;
      this.brands = brands;
      this.customerLabels = customerLabels;
    });

  }

  onCancel() {
    this.dialogRef.close();
  }

  onCustomerCodeChanged(e) {
    console.log(e);
    this.data.customerName = this.customerCodes.find(item => item.customerCd === e.target.value).name;
  }

  onTest() {
    console.log(this.thing);
  }

  onSetTest() {
    this.testControl.setValue('Whhhhhhhat!!!! Super Edwin!!!???!!!')
  }

  onTestChange(e) {
    console.log(e);
  }
}
