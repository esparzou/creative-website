import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public condition: boolean;
  public stoped: boolean;

  constructor() {
    this.condition = false;
    this.stoped = false;

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    /* let scrolling = document.documentElement.scrollTop;
    let header = document.getElementById('header');
    let services = document.getElementById('services');
    let portfolio = document.getElementById('portfolio');
    let about = document.getElementById('about');
    let news = document.getElementById('news');
    let video = document.getElementById('video');
    let skills = document.getElementById('skills');
    let contact = document.getElementById('contact');

    let menu = document.getElementById('menu');
    let menuHeight = menu.clientHeight;

     console.log(services.clientHeight);
    console.log(services.offsetHeight);
    console.log(services.offsetTop + header.offsetHeight);

    if(scrolling > (services.offsetTop - menuHeight)) {
      this.condition = true;
    } else {
      this.condition = false;
    }
    if(scrolling > (services.offsetTop + header.offsetHeight)) {
      this.condition = false;
      this.stoped = true;
     console.log(1400) 
    } else {
      this.stoped = false;
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
    } */

  }
  ngOnInit() {
  }

}
