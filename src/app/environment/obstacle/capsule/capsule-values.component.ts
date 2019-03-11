import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CapsuleObstacle} from '../../../model';

@Component({
  selector: 'capsule-values',
  templateUrl: './capsule-values.component.html',
  styleUrls: ['./capsule-values.component.css']
})


export class CapsuleValuesComponent implements OnInit, OnDestroy {


  @Input() capsule: CapsuleObstacle;

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


}
