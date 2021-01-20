import { BoundDirectivePropertyAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  constructor(){}
}
