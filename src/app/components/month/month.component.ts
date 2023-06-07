import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public selectedMonth: string ='';
  @Input() public form : any;
  constructor() { }

  ngOnInit(): void {

  }

  public monthTillNow(month: string): boolean {
    const currentMonth = new Date().getMonth();
    const selectedMonthIndex = this.months.indexOf(month);
    //this.form.value.month = this.selectedMonth;
    return selectedMonthIndex > currentMonth;
  }

  get m() {
    return this.form.controls['month'];
  }

}
