import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  @Input() form : any;
  public inputValue: any='';
  constructor() { }

  ngOnInit(): void {
  }

  public removeCommas() {

  }

  public addCommas(event : any) {


  }

}
