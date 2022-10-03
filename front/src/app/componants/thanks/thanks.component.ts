import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  public email = faEnvelope;
  public time  : number = 5;

  constructor(private router : Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.time--
      if(this.time === 0){
        this.router.navigate(['home'])
      }
    },1000)
    

  }

}
