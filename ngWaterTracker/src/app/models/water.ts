export class Water {
  // Keep in mind, the Angular model data fields must match exactly
  // to the spelling and case of the data fields in Java

  id: number | null;
  amountInOunces: number | null;
  waterLogComment: string | null;
  createdAt: string | null;

  constructor(
    id: number | null = 0, amountInOunces: number | null = 0,
    waterLogComment: string | null = '', createdAt: string | null = ''
  ){
    this.id = id;
    this.amountInOunces = amountInOunces;
    this.waterLogComment = waterLogComment;
    this.createdAt = createdAt;
  }

}
