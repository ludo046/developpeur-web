import { Component, Input, OnInit } from '@angular/core';
import { faGlobe, faLayerGroup, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  me = 'assets/images/moi2.png';
  mac = "assets/images/mac.png"
  layerGroup = faLayerGroup;
  globe = faGlobe;
  syncAlt = faSyncAlt;
  @Input() selectedUrl: string = 'assets/images/moi2.png';

  constructor() { }

  ngOnInit(): void {
  }

}
