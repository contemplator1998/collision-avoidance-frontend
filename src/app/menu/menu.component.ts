import {Component, Input, OnInit} from '@angular/core';
import {BoxObstacle, CapsuleObstacle, CartesianPosition, Obstacle, ObstacleType, PlaneObstacle, Point, Pose, Rotation} from '../model';
import {RunService} from '../service/run.service';
declare var $: any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private runService: RunService) { }


  @Input() environment: Obstacle[];
  @Input() toolShape: CapsuleObstacle[];
  @Input() base: CartesianPosition;
  @Input() poses: Pose[];

  runResult: String;
  isRunning = false;


  environmentTypes = [
    ObstacleType.CAPSULE,
    ObstacleType.BOX,
    ObstacleType.PLANE
  ];


  toolTypes = [
    ObstacleType.CAPSULE
  ];

  environmentActive: Obstacle;
  toolActive: Obstacle;

  static createObstacle(type: ObstacleType): Obstacle {
    let obstacle: Obstacle;
    switch (type) {
      case ObstacleType.PLANE:
        let plane: PlaneObstacle;
        plane = new PlaneObstacle();
        plane.firstPoint = new Point();
        plane.firstPoint.x = 0;
        plane.firstPoint.y = 0;
        plane.firstPoint.z = 0;
        plane.secondPoint = new Point();
        plane.secondPoint.x = 0;
        plane.secondPoint.y = 0;
        plane.secondPoint.z = 0;
        plane.thirdPoint = new Point();
        plane.thirdPoint.x = 0;
        plane.thirdPoint.y = 0;
        plane.thirdPoint.z = 0;
        plane.name = 'Plane';
        obstacle = plane;
        break;
      case ObstacleType.BOX:
        let box: BoxObstacle;
        box = new BoxObstacle();
        box.axisLength = new Point();
        box.axisLength.x = 0;
        box.axisLength.y = 0;
        box.axisLength.z = 0;
        box.centerPosition = new CartesianPosition();
        box.centerPosition.point = new Point();
        box.centerPosition.point.x = 0;
        box.centerPosition.point.y = 0;
        box.centerPosition.point.z = 0;
        box.centerPosition.rotation = new Rotation();
        box.centerPosition.rotation.roll = 0;
        box.centerPosition.rotation.pitch = 0;
        box.centerPosition.rotation.yaw = 0;
        box.name = 'Box';
        obstacle = box;
        break;
      case ObstacleType.CAPSULE:
        let capsule: CapsuleObstacle;
        capsule = new CapsuleObstacle();
        capsule.begin = new Point();
        capsule.begin.x = 0;
        capsule.begin.y = 0;
        capsule.begin.z = 0;
        capsule.end = new Point();
        capsule.end.x = 0;
        capsule.end.y = 0;
        capsule.end.z = 0;
        capsule.radius = 0;
        capsule.name = 'Capsule';
        obstacle = capsule;
        break;
    }
    return obstacle;
  }

  async onRunClick() {
    if (!this.isRunning) {
      $('#pause').show();
      $('#run').hide();
      this.runService.setBase(this.base).subscribe(() => {
        this.runService.setEnvironment(this.environment).subscribe(() => {
          this.runService.setToolShape(this.toolShape).subscribe(() => {
            this.runService.run(this.poses).subscribe(value => {
              this.runResult = JSON.stringify(value);
              console.log(value);
              $('#pause').hide();
              $('#run').show();
              this.isRunning = false;
              $('#runmodal').modal('show');
            });
            this.isRunning = true;
          });
        });
      });
    }
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

  addToolShape() {
    const index = this.toolShape.length;
    let capsule: CapsuleObstacle;
    capsule = new CapsuleObstacle();
    capsule.begin = new Point();
    capsule.begin.x = 0;
    capsule.begin.y = 0;
    capsule.begin.z = 0;
    capsule.end = new Point();
    capsule.end.x = 0;
    capsule.end.y = 0;
    capsule.end.z = 0;
    capsule.radius = 0;
    capsule.name = 'Capsule';
    this.toolShape.splice(index + 1, 0, capsule);
    this.updateToolActive(index);
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
