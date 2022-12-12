export interface Dog {
  id: string;
  name: string;
  birthYear: number;
  weight: number;
  sex: number;
  tags: string[];
}

export interface Party {
  id: string;
  name: string;
  tags: string[];
  startAt: string;
  host: Dog;
  attendees: Dog[];
}
