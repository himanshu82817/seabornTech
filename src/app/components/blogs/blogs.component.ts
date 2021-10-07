import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  data = [
    
    {name:"Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/blogs/b.jpg"},
    
    {name:"Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/blogs/d.jpg"},
    {name:"Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/blogs/a.jpg"},
    {name:" Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/blogs/a.jpg"},
    {name:" Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/blogs/b.jpg"},
    {name:" Tempore tenetur enim", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/blogs/c.jpg"},
    
  ]

  ngOnInit(): void {
  }

}
