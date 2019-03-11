import {Component, Input} from '@angular/core';
import {Obstacle, ObstacleType} from '../model';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent {

  @Input() obstacle : Obstacle;

  obstacleType = ObstacleType;

  constructor() { }

}
