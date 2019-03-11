import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ObstacleType} from '../../model';

@Component({
  selector: 'add-obstacle',
  templateUrl: './add-obstacle.component.html',
  styleUrls: ['./add-obstacle.component.css']
})
export class AddObstacleComponent {

  @Input() types : ObstacleType[];
  @Output() commandAdded = new EventEmitter<ObstacleType>();

  menuOpened = false;

  constructor() { }

  addCommand(type: ObstacleType) {
    this.commandAdded.emit(type);
  }

  icon(type: ObstacleType): string {
    switch (type) {
      case ObstacleType.PLANE:
        return 'square full';
      case ObstacleType.BOX:
        return 'cube';
      case ObstacleType.CAPSULE:
        return 'circle';
    }
  }
  name(type: ObstacleType): string {
    switch (type) {
      case ObstacleType.PLANE:
        return 'Plane';
      case ObstacleType.BOX:
        return 'Box';
      case ObstacleType.CAPSULE:
        return 'Capsule';
    }
  }

}
