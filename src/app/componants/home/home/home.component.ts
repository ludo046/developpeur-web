import { Component, OnInit } from '@angular/core';
import { faGlobe, faLayerGroup, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  me = 'assets/images/moi.jpg'
  layerGroup = faLayerGroup
  globe = faGlobe
  syncAlt = faSyncAlt

  constructor() { }

  ngOnInit(): void {
  }

}
