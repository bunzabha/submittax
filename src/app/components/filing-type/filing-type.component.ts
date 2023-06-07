import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { taxData } from 'src/app/model/taxData.model';
import { Subscription, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';


@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Input() form : any;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  public isEditable = false;
  public toFilling = [
    { key: '0', value: 'Ordinary Filing'},
    { key: '1', value: 'Additional Filing'},
  ];
  public onTime : string[] = ['On-Time'];


  @ViewChild(ModalConfirmComponent) modal: any;
  constructor(private _formBuilder: FormBuilder,
    private el: ElementRef,
    public dialog: MatDialog,) {}

  ngOnInit(): void {

  }

  public get f() {
    return this.form.controls;
  }

  public sendValue(value : string){
    const saleAmount = this.form.value.saleAmount;
    const penalty = this.form.value.penalty;
    const nextSale = saleAmount * 0.07;
    const taxA = nextSale.toFixed(2);
    const surCharge = nextSale * 0.01;
    const surC = surCharge.toFixed(2);
    const total = nextSale + surCharge + penalty;
    const totalA = parseFloat(total).toFixed(2);
    const penal = 200.00;
    const penalFix = penal.toFixed(2);
    const zero = 0.00
    const zeroFix = zero.toFixed(2)
    const selectedOption = this.form.value.selectedOption;
    this.form.patchValue({
      saleAmount: saleAmount,
      taxAmount: taxA,
      surCharge: selectedOption == '1' ? surC : zeroFix,
      penalty: selectedOption == '0' ? zeroFix : penalFix,
      totalAmount: totalA,
      selectedValue : value,
    });
    console.log("value when some field hidden : ",this.form.value)
  }

  public confirm(event : any){
    const dialogRef = this.dialog.open(ModalConfirmComponent,
      {
        data: {form: JSON.stringify(this.form.value)},
        width: '50%',
        disableClose: true,
      });


    // dialogRef.afterOpened().subscribe(result => {
    //   dialogRef.componentInstance.setDatasource(this.wfSer.getuploadWF());

    // });

    dialogRef.afterClosed().subscribe((xx ) =>{
      console.log("after closed : ",xx)

      if (xx) {

        // xxxx
    }
    });

}





}
