export class Water {
  // Keep in mind, the Angular model data fields must match exactly
  // to the spelling and case of the data fields in Java

  id: number | null;
  amountInOunces: number | null;
  isSparklingWater: boolean | null;
  waterLogComment: string | null;
  createdAt: string | null;
  updatedAt: string | null;

  constructor(
    id: number | null = 0, amountInOunces: number | null = 0, isSparklingWater: boolean = false,
    waterLogComment: string | null = '', createdAt: string | null = '', updatedAt: string | null = ''
  ){
    this.id = id;
    this.amountInOunces = amountInOunces;
    this.isSparklingWater = isSparklingWater;
    this.waterLogComment = waterLogComment;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}
