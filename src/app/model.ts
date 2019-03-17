export enum  ObstacleType {
  CAPSULE = 'CAPSULE',
  BOX = 'BOX',
  PLANE = 'PLANE'
}

export abstract class Obstacle {
  name: string;
  type: ObstacleType;
}

export class CapsuleObstacle extends Obstacle {
  readonly type = ObstacleType.CAPSULE;
  begin : Point;
  end : Point;
  radius : number;
}

export class BoxObstacle extends Obstacle{
  readonly type = ObstacleType.BOX;
  centerPosition : CartesianPosition;
  axisLength : Point;
}

export class PlaneObstacle extends Obstacle{
  readonly type = ObstacleType.PLANE;
  firstPoint: Point;
  secondPoint : Point;
  thirdPoint : Point;
}

export class CartesianPosition {
  point : Point;
  rotation : Rotation;
}

export class Point{
  x = 0;
  y = 0;
  z = 0;
}

export class Rotation{
  roll = 0;
  pitch = 0;
  yaw = 0;
}

export class Pose {
  a1 = 0;
  a2 = 0;
  a3 = 0;
  a4 = 0;
  a5 = 0;
  a6 = 0;
}


