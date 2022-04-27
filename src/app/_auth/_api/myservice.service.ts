import { Injectable } from '@angular/core';
import { Service } from 'src/app/_auth/models/service.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  Services: Service[];
  id: number;
  constructor() {
    this.Services = [
      {
        id: 1,
        jobId: 1,
        title: "Software Engineer",
        img: 'assets/1.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."
      },
      {
        id: 2,
        jobId: 2,
        title: "Digital Markiting",
        img: 'assets/2.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."      },
      {
        id: 3,
        jobId: 3,
        title: "Wordpress Developer",
        img: 'assets/3.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."      },
      {
        id: 4,
        title: "Visual Designer",
        jobId: 4,
        img: 'assets/4.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."      },
      {
        id: 5,
        jobId: 5,
        title: "Software Engineer",
        img: 'assets/5.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."      },
      {
        id: 6,
        jobId: 6,
        title: "Creative Engineer",
        img: 'assets/6.svg',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.",
        description2: "Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing."      },
    ]
  }
  getServices(jobId) {
    // return this.Services;
    let services = [];
    this.Services.forEach(service => {
      if (service.jobId == jobId)
        services.push(service)
    });
    return services;
  }
}
