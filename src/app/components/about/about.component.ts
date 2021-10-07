import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data = [
    {heading:'Excellence',content:'We believe it is crucial to be competitive and motivated to reach your desired goals.',img:"fas fa-trophy"},
    {heading:'Commitment',content:'We abide by our words and stay committed to our clients throughout their business journey.',img:"fas fa-handshake"},
    {heading:'Result',content:'Driven approach- we measure ,analyse, act with strategies that have positive outlook and guarantee results.',img:"fas fa-chart-line"},
    {heading:'Honesty',content:'We serve what we say and that is evident from our work . we believe in maintaining long trustworthy relationships with our clients.',img:"fas fa-smile-beam"},
    {heading:'Innovation',content:'Resolving critical problems by coming up with new ideas and technologies that increase productivity and generate greater output which depends on innovations.',img:"fas fa-flask"},
    {heading:'Quality Adherence',content:'We have a reputation in delivering projects at affordable prices without compromising on its quality.',img:"fas fa-award"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
