import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddObstacleComponent} from './add-obstacle.component';

describe('AddObstacleComponent', () => {
  let component: AddObstacleComponent;
  let fixture: ComponentFixture<AddObstacleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObstacleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObstacleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
