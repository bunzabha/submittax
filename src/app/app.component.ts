import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public currentDate: string = '';
  public title =  '';
  public timer: any;
  public user: string[] = ['Lorem CO Ltd.'];
  public isDropdownOpen: boolean = false;

  form = this._formBuilder.group({
    selectedOption: ['0'],
    selectedValue: ['Ordinary Filing', ''],
    month: ['', Validators.required],
    year: ['', Validators.required],
    type: ['', Validators.required],
    saleAmount: ['',Number(Validators.required)],
    taxAmount: ['',Number],
    surCharge: ['',Number],
    penalty: ['',Number],
    totalAmount: ['',Number],
  });

  constructor(private _formBuilder: FormBuilder) {
    const hiddenForm = this.form.controls['selectedOption'].value;
    const typeForm = this.form.controls['type'];
    if (hiddenForm == '0') {
      typeForm.clearValidators();
    } else {
      typeForm.setValidators(Validators.required);
    }
    typeForm.updateValueAndValidity();
  }

  ngOnInit() {
    const now = new Date();
    this.currentDate = formatDate(now, "hh:mm (z) | d'th' MMMM yyyy", 'en-US');
  }


}
