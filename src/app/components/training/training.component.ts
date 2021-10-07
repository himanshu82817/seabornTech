import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  data = [
    {img:"/assets/images/course/python.png",title:"Python",link:"/python"},
    {img:"/assets/images/course/django.png",title:"Python with DJango"},
    {img:"/assets/images/course/data-science.png",title:"Data Science"},
    {img:"/assets/images/course/machine-learning.png",title:"Machine Learning"},
    {img:"/assets/images/course/artificial-intelligence.png",title:"Artificial Intelligence(AI)"},
    {img:"/assets/images/course/devops.png",title:"DevOps"},
    {img:"/assets/images/course/power-bi.png",title:"Power BI"},
    {img:"/assets/images/course/robot.png",title:"RPA"},
  ]

  ngOnInit(): void {
  }

}
