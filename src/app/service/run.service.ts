import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CapsuleObstacle, CartesianPosition, Obstacle, Pose} from '../model';

@Injectable()
export class RunService {

  constructor(private http: HttpClient) { }

  run(poses: Pose[]) : Observable<String> {
    return this.http.put<String>('/run', poses);
  }

  setBase(base : CartesianPosition) {
      this.http.put<CartesianPosition>('/base', base);
  }

  setEnvironment(environment : Obstacle[]){
    this.http.put<Obstacle[]>('/environment', environment);
  }

  setToolShape(toolShape : CapsuleObstacle[]){
    this.http.put<CapsuleObstacle[]>('/tool', toolShape);
  }


}
