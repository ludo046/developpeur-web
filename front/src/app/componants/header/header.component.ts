import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/images/logo.png';
  poweroff = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

  disconnect():void{
    sessionStorage.clear()
  }
  

}
