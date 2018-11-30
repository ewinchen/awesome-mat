import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';

@Component({
  selector: 'app-fsr-header',
  templateUrl: './fsr-header.component.html',
  styleUrls: ['./fsr-header.component.scss']
})
export class FsrHeaderComponent implements OnInit {

  @Input() fsrHeader;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCustomerDialog() {
    const customerDialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '90vw',
      data: {
        name: 'Customer Info',
        customerCode: this.fsrHeader.customerCode,
        customerName: this.fsrHeader.customerName,
        brand: this.fsrHeader.brand,
        customerLabel: this.fsrHeader.customerLabel,
      }
    });

    customerDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fsrHeader.customerCode = result.customerCode;
        this.fsrHeader.customerName = result.customerName;
        this.fsrHeader.brand = result.brand;
        this.fsrHeader.customerLabel = result.customerLabel;
      }
    });
  }

}
