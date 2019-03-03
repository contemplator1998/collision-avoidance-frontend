import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-pose',
  templateUrl: './pose.component.html',
  styleUrls: ['./pose.component.css']
})
export class PoseComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {
  }

}