import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CapsuleObstacle, CartesianPosition, Obstacle, Pose} from '../model';

@Injectable()
export class RunService {

  constructor(private http: HttpClient) {
  }

  run(poses: Pose[]): Observable<Pose[]> {
    return this.http.put<Pose[]>('/run', poses);
  }

  setBase(base: CartesianPosition): Observable<CartesianPosition> {
    return this.http.put<CartesianPosition>('/base', base);
  }

  setEnvironment(environment: Obstacle[]): Observable<Obstacle[]> {
    return this.http.put<Obstacle[]>('/environment', environment);
  }

  setToolShape(toolShape: CapsuleObstacle[]): Observable<CapsuleObstacle[]> {
    return this.http.put<CapsuleObstacle[]>('/tool', toolShape);
  }
}
