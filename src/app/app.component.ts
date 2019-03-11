import {Component, OnInit} from '@angular/core';
import {CapsuleObstacle, CartesianPosition, Obstacle, Point, Rotation} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-project';
  environment : Obstacle[];
  toolShape : CapsuleObstacle[];
  base : CartesianPosition;

  ngOnInit(): void {
    this.base = new CartesianPosition();
    this.base.point = new Point();
    this.base.rotation = new Rotation();
    this.environment = [];
    this.toolShape = [];
  }
}
