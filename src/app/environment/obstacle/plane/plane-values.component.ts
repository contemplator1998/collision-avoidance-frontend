import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CapsuleObstacle, PlaneObstacle} from '../../../model';

@Component({
  selector: 'plane-values',
  templateUrl: './plane-values.component.html',
  styleUrls: ['./plane-values.component.css']
})


export class PlaneValuesComponent implements OnInit, OnDestroy {


  @Input() plane: PlaneObstacle;

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


}
