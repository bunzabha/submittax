import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Input() form : any;

  public inputValue: any='';
  public tax : any;
  errorBlock : boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  public removeCommas() {
    this.inputValue = this.inputValue.replace(/,/g, '');
  }

  public addCommas(event : any) {
    const inputValue = event.target.value;

    if (inputValue*1 != inputValue) {
      this.inputValue = '';
    }
    if (this.inputValue) {
      const formattedValue = parseFloat(this.inputValue).toFixed(2);
      const penalty = this.form.value.penalty;
      const saleAmount = inputValue;
      const nextSale = saleAmount * 0.07;
      const taxA = nextSale.toFixed(2);
      const surCharge = nextSale * 0.01;
      const surC = surCharge.toFixed(2);
      const total = nextSale + surCharge + penalty;
      const totalA =  parseFloat(total).toFixed(2);
      const penal = 200.00;
      const penalFix = penal.toFixed(2);
      const zero = 0.00
      const zeroFix = zero.toFixed(2)
      const selectedOption = this.form.value.selectedOption;
      const currency = 'THB'
      this.inputValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');


      this.form.patchValue({
        saleAmount: saleAmount,
        taxAmount: taxA,
        surCharge: selectedOption == '1' ? surC : zeroFix,
        penalty: selectedOption == '0' ? zeroFix : penalFix,
        totalAmount: totalA,
      });




    }
  }


    get s() {
    return this.form.controls;
  }
}
