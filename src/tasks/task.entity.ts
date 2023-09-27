export enum TaksStatusEnum {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// possible t generate for DB
export class Task {
  id: string;
  title: string;
  description: string;
  status: TaksStatusEnum;
}
