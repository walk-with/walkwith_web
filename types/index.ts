export interface Dog {
  name: string;
}

export interface Party {
  id: string;
  name: string;
  tags: string[];
  startAt: string;
  srcUrl: string;
  host: Dog;
}
