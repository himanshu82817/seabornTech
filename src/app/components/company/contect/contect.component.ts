import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {

  purposeValue = 'training';

  getValue(value:any){
    this.purposeValue = value.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
