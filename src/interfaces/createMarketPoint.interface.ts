export interface CreateMarketPoint {
  id: number;
  userId: number;
  namePoint: string;
  point: Point;
  createdAt: Date;
  updatedAt: Date;
}

export interface Point {
  lng: number;
  lat: number;
}
