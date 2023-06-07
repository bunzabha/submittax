import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { taxData } from './model/taxData.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'angular-tour';
  public currentDate : string = '';

  public timer: any;
  public user : string[] =  ['Lorem CO Ltd.'];
  public isDropdownOpen: boolean = false



  form = this._formBuilder.group({
    selectedOption: ['0', Validators.required],
    selectedValue: ['Ordinary Filing',''],
    month: ['', Validators.required],
    year: ['', Validators.required],
    type: ['',Validators.required],
    saleAmount: ['',Validators.required],
    taxAmount: ['',''],
    surCharge: ['',''],
    penalty: ['',''],
    totalAmount: ['',Number],

  });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });



  constructor(private _formBuilder: FormBuilder) {
    const hiddenForm = this.form.controls['selectedOption'].value;
    const typeForm = this.form.controls['type'];
    if (hiddenForm == '0') {
      typeForm.clearValidators();

    }
    else{
      typeForm.setValidators(Validators.required);

    }
    typeForm.updateValueAndValidity();

   }

  ngOnInit() {

    const now = new Date();
      this.currentDate = formatDate(now, 'hh:mm (z) | d\'th\' MMMM yyyy','en-US');

  }
  // get form() {
  //   return this.firstFormGroup.controls;
  // }
  public toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }





}
