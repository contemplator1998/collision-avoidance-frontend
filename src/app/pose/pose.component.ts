import {Component, Input, OnInit} from '@angular/core';
import {Pose} from '../model';


@Component({
  selector: 'app-pose',
  templateUrl: './pose.component.html',
  styleUrls: ['./pose.component.css']
})
export class PoseComponent implements OnInit {
  @Input() name: string;

  @Input() pose: Pose;

  constructor() {}

  ngOnInit() {
  }

}
