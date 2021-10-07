import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
toggle = false;



offToggle(){
  this.toggle = false;
  let dropdown = document.getElementById('dropdownMenu') as HTMLElement;
  dropdown.style.height="0";
}


showMenu(){
  this.toggle=!this.toggle;
  let dropdown = document.getElementById('dropdownMenu') as HTMLElement;
  if(!this.toggle){
    dropdown.style.height="0";
  }
  else{
    dropdown.style.height="360px";
}}
  ngOnInit(): void {
    let dropdown = document.getElementById('dropdownMenu') as HTMLElement;
    if(!this.toggle){
      dropdown.style.height="0";    
     }
    window.addEventListener("scroll",function(){
      const header=document.querySelector('header');
      if (header){
        header.classList.toggle("sticky", window.scrollY>0);}})
  }

}
