import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { taxData } from 'src/app/model/taxData.model';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Input() form : any;

  public inputValue: any='';
  public tax : any;
  public errorBlock : boolean = false;
  public taxData : taxData = new taxData();
  constructor(private cp: CurrencyPipe,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  // public removeCommas() {
  //   this.inputValue = this.inputValue.replace(/,/g, '');
  // }

  public addCommas(event : any) {
    console.log("check event : ",event)
    const saleAmount = this.form.value.saleAmount;
    const delCommad = saleAmount.replace(/,/g,'')
    console.log("check event2 : ",saleAmount)
     if (saleAmount) {
      const penalty = this.form.value.selectedOption == "1" ? 200.00 : 0.00;
      const nextSale = parseFloat(delCommad) * 0.07;
      const taxA = nextSale.toFixed(2);
      const surCharge = this.form.value.selectedOption == "1" ? nextSale * 0.01 : 0.00;
      //const surC = surCharge.toFixed(2);
      const total = nextSale + surCharge + penalty;
      const penalFix = penalty.toFixed(2);
      const zero = 0.00
      const zeroFix = zero.toFixed(2)
      const selectedOption = this.s['selectedOption'].value;



      this.form.patchValue({
        saleAmount: this.cp.transform(delCommad,' '),
        taxAmount:  this.cp.transform(taxA,' '),
        surCharge:  this.cp.transform(surCharge,' '),
        penalty:  this.cp.transform(penalFix,' '),
        totalAmount:  this.cp.transform(total,' '),
      });
      this.cdRef.detectChanges();
      console.log("type : ",this.s['selectedOption'].value);

     }
     else{
       if (saleAmount) {
        this.form.patchValue({
          saleAmount: this.cp.transform(delCommad,' '),
          taxAmount:  this.cp.transform(0.00,' '),
          surCharge:  this.cp.transform(0.00,' '),
          penalty:  this.cp.transform(200.00,' '),
          totalAmount:  this.cp.transform(0.00,' '),
        });
       }

     }
  }


    get s() {
    return this.form.controls;
  }
}
