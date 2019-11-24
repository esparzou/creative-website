import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
/*   @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > document.getElementById('services').offsetTop) {
      console.log('ok')
       document.getElementById('header').classList.add('changeColor');
      document.getElementById('paragraph').classList.add('green'); 
    }
  } */



  constructor() { }

  ngOnInit() {
  }

}
