import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BoxObstacle, CapsuleObstacle, Obstacle, ObstacleType, PlaneObstacle} from '../../model';

@Component({
  selector: 'obstacle-list',
  templateUrl: './obstacle-list.component.html',
  styleUrls: ['./obstacle-list.component.css']
})


export class ObstacleListComponent implements OnInit, OnDestroy {


  @Input() environment: Obstacle[];

  @Output() activeIndex = new EventEmitter<any>();

  lastSelected = -1;

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
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

  remove(i) {
    this.environment.splice(i,1);
    if(i < this.lastSelected){
      this.lastSelected = this.lastSelected - 1;
    }
    if(i == this.lastSelected) {
      this.select(this.environment.length + 1);
    }
  }

  select(i){
    this.lastSelected = i;
    this.activeIndex.emit(i);
  }

}
