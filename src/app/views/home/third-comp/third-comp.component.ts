import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.css']
})
export class ThirdCompComponent implements OnInit {
  items=[];
  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        img:'assets/2.png',
      },
      {
        img:'assets/3.png',
      },
      {
        img:'assets/4.png',
      },
      {
        img:'assets/5.png',
      }, 
      {
        img:'assets/6.png',
      },
      {
        img:'assets/7.png',
      },
      {
        img:'assets/8.png',
      },
      {
        img:'assets/9.png',
      },
      {
        img:'assets/10.png',
      },
    ]
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 900,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
