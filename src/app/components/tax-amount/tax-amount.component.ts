import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  @Input() form : any;
  public inputValue: any='';
  public errorBlock : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public removeCommas() {
    this.inputValue = this.inputValue.replace(/,/g, '');
  }

  public addCommas(event : any) {
    const inputValue = event.target.value;
    const saleAmount = this.form.value.saleAmount;
    const checkInvalid = saleAmount-inputValue;
    if (inputValue*1 != inputValue) {
      this.inputValue = '';
    }
    if (this.inputValue) {
      const formattedValue = parseFloat(this.inputValue).toFixed(2);
      this.inputValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    }
    if (Math.abs(checkInvalid) > 20.00) {
      this.form.controls['taxAmount'].setErrors({'error': true});
      this.errorBlock = true;
    } else {
      this.form.controls['taxAmount'].setErrors(null);
      this.errorBlock = false;
    }

  }

}
