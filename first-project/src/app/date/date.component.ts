import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage : string | undefined ;
  user: any;
  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage =  currentDate.toDateString()+ ' ' +currentDate.toLocaleTimeString();
    }, 1000);

    this.user = {

      name: 'Ram',
      title: 'Software Developer',
      address: '123 Main strt, City, State, 100000',
      phone: [
        // '4564564564',
        // '3455345345',
        // '23423t3334'

      ]
    };
       
  }

  ngOnInit() {
  }

}
