import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {
  @Input() form : any;
  public inputValue: any='';
  constructor() { }

  ngOnInit(): void {
  }

  public removeCommas() {
    // this.inputValue = this.inputValue.replace(/,/g, '');
  }

  public addCommas(event : any) {
    // const inputValue = event.target.value;
    // if (inputValue*1 != inputValue) {
    //   this.inputValue = '';
    // }
    // if (this.inputValue) {
    //   const formattedValue = parseFloat(this.inputValue).toFixed(2);
    //   this.inputValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // }


  }
}
