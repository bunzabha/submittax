import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {
  @Input() form : any;
  constructor() { }

  ngOnInit(): void {
  }


}
