import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }



  

  data=[
    {image:"/assets/images/Data analytics _Monochromatic.svg",heading:"Data Analytics",content:"Leverage Data Analytics to help your business boost revenues, improve operational efficiency, optimize customer service and respond quickly to emerging market trends"},
    {image:"/assets/images/Artificial intelligence_Flatline.svg",heading:"Robotic Process Automation",content:"Automate your business with AI-powered automation and empower your business."},
    {image:"/assets/images/undraw_android_jr64.svg",heading:"Android Development",content:"We develop novel Android applications built on the business requirements to scale-up your business."},
    {image:"/assets/images/_Digital content_Outline.svg",heading:"Digital Marketing",content:"Create your online presence in today's electronically savvy world by promoting your business digitally with us."},
    {image:"/assets/images/Science discovery_Monochromatic.svg",heading:"IoT",content:"Drive your business growth using IoT Technology with a perfectly-architected IoT ecosystem."},
    {image:"/assets/images/Web Developer_Outline.svg",heading:"Software Development",content:"Build or transform your software with our team to get robust, agile and high-end software for impeccable user-experience."},
  ]

  ngOnInit(): void {
  }

}


