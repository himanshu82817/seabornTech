import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  selectedValue: number = 0;

  constructor() { }

  data = [
    {heading: "Overview of Python",number: 1, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Installation of Python",number: 2, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Control flow",number: 3, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Modules",number: 4, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Exception handling",number: 5, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Threading",number: 6, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Database(SQL, MongoDB)",number: 7, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Working with files",number: 8, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
    {heading: "Writing Python scripting",number: 9, content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo vero voluptate nam aut eligendi quibusdam, nisi unde. Cupiditate placeat similique accusantium, voluptatem quo molestias suscipit quaerat neque maiores error?"},
  ]

  faqData = [
    {ques:"Why choose seaborntechnologies for learning python training?",answ:"Seaborntechnologies is a door to a realm of knowledge & quality. We stand out among other institute in terms of quality as we provide best material video lecture, recorded lectures and along with these features we also provide certification from Microsoft further more we provide internship to make our student ready for the IT world.",number:1},
    {ques:"What kind of projects do we provide in Python training at seaborntechnologies?",answ:"Seaborntechnologies will push you to work with python as a friendly neighbour some of the projects that students will be working on are: Scientific application, website creation, script creating, RPA script, Data analytics, working with IOT devices, creating Enterprise dashboard.",number:2},
    {ques:"Jobs Scope after python training at seaborntechnologies?",answ:"Seaborntechnologies will be providing you with internship and if the students perform well in there provision period company may hire them or after the internship students will be skilled in a to get the job in python field, not only that we will be providing placement assistance for 1 year.",number:3},
    {ques:"Can a complete beginner with zero knowledge in coding take this course?",answ:"Indeed yes, anyone can enrol for this course regardless of your background the only thing that matters is consistency, hard work and dedication.",number:4},
  ]


  changeSelectedValue(value: number) {
    if(this.selectedValue === value) {
      this.selectedValue = 0;
    }
    else {
      this.selectedValue = value;
    }
  }

  ngOnInit(): void {
  }

}
