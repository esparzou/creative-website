import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public toogle: boolean;
  public bgColor: string;

  constructor() { 
    this.toogle = false;
    this.bgColor = 'blue';
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    let scrolling = document.documentElement.scrollTop;
    //let header = document.getElementById('header');
    let services = document.getElementById('services');
    let portfolio = document.getElementById('portfolio');
    let about = document.getElementById('about');
    let news = document.getElementById('news');
    let video = document.getElementById('video');
    let skills = document.getElementById('skills');
    let contact = document.getElementById('contact');

    let menu = document.getElementById('menu');
    let menuHeight = menu.clientHeight;

    if (scrolling < (services.offsetTop - menuHeight)) {
      this.bgColor = 'blue'
    } 
    if(scrolling > (services.offsetTop - menuHeight)) {
      this.bgColor = 'green'
    }
     if(scrolling > (portfolio.offsetTop - menuHeight)) {
      this.bgColor = 'orange'
    }
     if(scrolling > (about.offsetTop - menuHeight)) {
      this.bgColor = 'pink'
    } 
     if(scrolling > (news.offsetTop - menuHeight)) {
      this.bgColor = 'green'
    }
     if(scrolling > (video.offsetTop - menuHeight)) {
      this.bgColor = 'orange'
    } 
     if(scrolling > (skills.offsetTop - menuHeight)) {
      this.bgColor = 'green'
    } 
     if(scrolling > (contact.offsetTop - menuHeight)) {
      this.bgColor = 'pink'
    }

  }

  toogleMenu() {
    this.toogle = !this.toogle;
    console.log(this.toogle)
  }

  ngOnInit() {
  }

}
