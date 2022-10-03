import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  html = "assets/icon/html.svg"
  css = "assets/icon/css.svg"
  sass = "assets/icon/sass.svg"
  js = "assets/icon/js.svg"
  angular = "assets/icon/angular.svg"
  sql = "assets/icon/mysql.svg"
  mongo = "assets/icon/mongo.svg"
  node = "assets/icon/nodejs.svg"
  socket = "assets/icon/socket.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
