import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BoxObstacle, CapsuleObstacle, Obstacle, ObstacleType, PlaneObstacle} from '../model';

@Component({
  selector: 'tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})


export class ToolListComponent implements OnInit, OnDestroy {


  @Input() toolShape: CapsuleObstacle[];

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
    this.toolShape.splice(i,1);
    if(i < this.lastSelected){
      this.lastSelected = this.lastSelected - 1;
    }
    if(i == this.lastSelected) {
      this.select(this.toolShape.length + 1);
    }
  }

  select(i){
    this.lastSelected = i;
    this.activeIndex.emit(i);
  }

}
