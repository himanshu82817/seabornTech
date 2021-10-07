import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  constructor() { }


  data = [
    {img:"/assets/images/certificate/1.jpg"},
    {img:"/assets/images/certificate/2.jpg"},
    {img:"/assets/images/certificate/3.jpg"},
    {img:"/assets/images/certificate/4.jpg"},
    {img:"/assets/images/certificate/5.jpg"},
  ]

  ngOnInit(): void {
  }

}
