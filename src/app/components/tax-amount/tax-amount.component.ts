import { CurrencyPipe } from '@angular/common';
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
  constructor(private cp: CurrencyPipe) { }

  ngOnInit(): void {
  }



  public addCommas(event : any) {
    const inputValue = event.target.value;
    const saleAmount = this.form.value.saleAmount;
    const checkInvalid = parseFloat(saleAmount)-parseFloat(inputValue);
    console.log("xx : ",typeof checkInvalid)

    this.form.patchValue({
      taxAmount: this.cp.transform(event.target.value, ' '),
    });

    if (Math.abs(checkInvalid) > 20.00) {
      this.form.controls['taxAmount'].setErrors({'error': true});
      this.errorBlock = true;
    } else {
      this.form.controls['taxAmount'].setErrors(null);
      this.errorBlock = false;
    }

  }

}
