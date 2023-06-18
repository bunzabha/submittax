import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() public form : any;
  public currentYear: number = new Date().getFullYear();
  public years: number[] = Array.from({ length: this.currentYear - 2019 }, (_, index) => this.currentYear - index);
  public selectedYear: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  public yearTillNow(year: number): boolean {
    this.form.value.year = this.selectedYear;

    return year > this.currentYear;
  }

  get y() {
    return this.form.controls['year'];
  }


}
