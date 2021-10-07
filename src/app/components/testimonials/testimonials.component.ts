import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  data = [
    
    {name:"Mrs. Kethwalia1", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/testimonials/b.jpg"},
    
    {name:"Mr. Kethwalia", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/testimonials/d.jpg"},
    {name:"Mrs. Kethwalia2", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ...",img:"/assets/images/testimonials/e.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/testimonials/a.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/testimonials/b.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?",img:"/assets/images/testimonials/c.jpg"},
    
  ]

  data2 = [
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/a.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/b.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/c.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/d.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/e.jpg"},
    {name:"Stark", comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, optio consectetur beatae, corrupti veniam iste quibusdam corporis ratione voluptatum ad? Tempore tenetur enim dolore velit expedita, ea ducimus eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam rerum dolorum accusantium nostrum ipsam vero quis fugiat aut architecto, totam magnam omnis possimus blanditiis dolore deleniti praesentium. Vel, reprehenderit.",img:"/assets/images/testimonials/f.jpg"},
  ]

  ngOnInit(): void {
  }

}