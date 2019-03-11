import {Component, Input, OnInit} from '@angular/core';
import {BoxObstacle, CapsuleObstacle, CartesianPosition, Obstacle, ObstacleType, PlaneObstacle} from '../model';
declare var $:any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input() environment : Obstacle[];
  @Input() toolShape : CapsuleObstacle[];
  @Input() base : CartesianPosition;


  environmetnTypes = [
    ObstacleType.CAPSULE,
    ObstacleType.BOX,
    ObstacleType.PLANE
  ];


  toolTypes = [
    ObstacleType.CAPSULE
  ];

  environmentActive : Obstacle;
  toolActive : Obstacle;

  constructor() { }

  onRunClick() {
    $('#pause').show();
    $('#run').hide();
  }
  onPauseClick() {
    $('#pause').hide();
    $('#run').show();
  }

  onBaseClick() {
    $('#basemodal').modal('show');
  }

  onToolClick() {
    $('#toolmodal').modal('show');
  }

  onEnvironmentClick() {
    $('#environmentmodal').modal('show');
  }

  addObstacle(type: ObstacleType) {
    const index = this.environment.length;

    this.environment.splice(index + 1, 0, MenuComponent.createObstacle(type));
    this.updateEnvironmentActive(index);
  }

  addToolShape(){
    const index = this.toolShape.length;
    const capsule = new CapsuleObstacle();
    capsule.name = 'Capsule' + (index + 1);
    this.toolShape.splice(index + 1, 0, capsule);
    this.updateToolActive(index);
  }

  static createObstacle(type: ObstacleType) : Obstacle{
    let obstacle: Obstacle;
    switch (type) {
      case ObstacleType.PLANE:
        obstacle = new PlaneObstacle();
        obstacle.name = 'Plane';
        break;
      case ObstacleType.BOX:
        obstacle = new BoxObstacle();
        obstacle.name = 'Box';
        break;
      case ObstacleType.CAPSULE:
        obstacle = new CapsuleObstacle();
        obstacle.name = 'Capsule';
        break;
    }
    return obstacle;
  }

  updateEnvironmentActive(index) {
    this.environmentActive = this.environment[index];
  }
  updateToolActive(index) {
    this.toolActive = this.toolShape[index];
  }

  ngOnInit() {
  }

}
