import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projectArray = [
    {
      sourceLink: './assets/images/counter.png',
      title: 'UI Follower Counter',
      desp: "I design and develop Follower Counter with the help of Html,Css And Js",
      previewLink : "https://mtayabaig.github.io/15-Counter/"
    },
    {
      sourceLink: './assets/images/waterapp.png',
      title: 'Water Drinking App',
      desp: "I created a water app using html,css and js",
      previewLink : "https://mtayabaig.github.io/water-app/"
    },
    {
      sourceLink: './assets/images/waterapp.png',
      title: 'Water Drinking App',
      desp: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores",
      previewLink : "https://mtayabaig.github.io/water-app/"
    },
  ];

}
