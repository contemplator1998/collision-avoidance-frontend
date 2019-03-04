import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  ngOnInit() {
  }

}
