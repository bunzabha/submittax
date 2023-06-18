import { Component, ElementRef, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taxData } from 'src/app/model/taxData.model';
import { Subscription, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() form : any;
  public isEditable = false;
  public toFilling = [
    { key: '0', value: 'Ordinary Filing' , default : true},
    { key: '1', value: 'Additional Filing' , default : false},
  ];
  public onTime : string[] = ['On-Time'];
  public taxData : taxData = new taxData();


  @ViewChild(ModalConfirmComponent) modal: any;
  constructor(private _formBuilder: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private cp: CurrencyPipe) {

    }

  ngOnInit(): void {
    console.log("value : ",this.form.value)
  }

  public get f() {
    return this.form.controls;
  }

  public sendValue(value : string){
    const saleAmount = this.form.value.saleAmount;
    console.log("typeof : ",typeof saleAmount)
    if (value == "0") {
      if (saleAmount) {
        const saleRe = saleAmount.replace(/,/g,'')
        console.log("typeof : ",typeof saleRe)
        const penalty = 0.00;
        const nextSale = parseFloat(saleRe) * 0.07;
        const taxA = nextSale.toFixed(2);
        const surCharge = 0.00;
        //const surC = surCharge.toFixed(2);
        const total = nextSale + 0.00 + 0.00;
        const penalFix = penalty.toFixed(2);
        const zero = 0.00
        const zeroFix = zero.toFixed(2);
        this.form.patchValue({
          surCharge:  this.cp.transform(surCharge,' '),
          penalty:  this.cp.transform(penalty,' '),
          totalAmount:  this.cp.transform(nextSale,' '),

        });
      }

    }
    else{
      if(saleAmount){
        const saleRe = saleAmount.replace(/,/g,'')
        const penalty = 200.00;
        const nextSale = parseFloat(saleRe) * 0.07;
        const taxA = nextSale.toFixed(2);
        const surCharge = nextSale * 0.01;
        //const surC = surCharge.toFixed(2);
        const total = nextSale + surCharge + penalty;
        const penalFix = penalty.toFixed(2);
        const zero = 0.00
        const zeroFix = zero.toFixed(2);
        this.form.patchValue({
          saleAmount: this.cp.transform(saleRe, ' '),
          surCharge:  this.cp.transform(surCharge,' '),
          penalty:  this.cp.transform(penalty,' '),
          totalAmount:  this.cp.transform(total,' '),

        });
      }


    }





  }

  public convertTaxData() {
    this.taxData  = {
      selectedOption: this.form.value.selectedOption,
      selectedValue: this.form.value.selectedValue,
      filingType: this.form.value.filingType,
      month: this.form.value.month,
      year: this.form.value.year,
      type: this.form.value.type,
      saleAmount: this.form.value.saleAmount,
      taxAmount: this.form.value.taxAmount,
      surCharge: this.form.value.surCharge,
      penalty: this.form.value.penalty,
      totalAmount: this.form.value.totalAmount,
    };
    return this.taxData;
  }

  public nextBtn(){
    this.convertTaxData();
    console.log("next : ",this.convertTaxData())
  }

  public confirm(event : any){
    const dialogRef = this.dialog.open(ModalConfirmComponent,
      {
        data: {form: JSON.stringify(this.form.value)},
        width: '50%',
        disableClose: true,
      });



    dialogRef.afterClosed().subscribe((xx : any) =>{
      console.log("after closed : ",xx)


    });

}





}
