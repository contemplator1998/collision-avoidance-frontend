import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BoxObstacle} from '../../../model';

@Component({
  selector: 'box-values',
  templateUrl: './box-values.component.html',
  styleUrls: ['./box-values.component.css']
})


export class BoxValuesComponent implements OnInit, OnDestroy {


  @Input() box: BoxObstacle;

  constructor() {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


}
