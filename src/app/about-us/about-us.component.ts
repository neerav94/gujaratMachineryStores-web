import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', '../../css/universal.css', '../../css/color.css']
})
export class AboutUsComponent implements OnInit {

  experience: number = 0;
  staff: number = 0;
  clients: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if(this.experience === 43) {
        clearInterval(0);
      } else {
        this.experience += 1;
      }
    }, 50)

    setInterval(() => {
      if(this.staff === 15) {
        clearInterval(0);
      } else {
        this.staff += 1;
      }
    }, 50)

    setInterval(() => {
      if(this.clients === 100) {
        clearInterval(0);
      } else {
        this.clients += 1;
      }
    }, 50)
  }

}
