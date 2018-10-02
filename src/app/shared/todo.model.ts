export class Todo {
  // public value: string;
  // public isDone: boolean;
  public isEdit: boolean;

  // constructor(value: string,
  //             isDone: boolean) {
  //   this.value = value;
  //   this.isDone = isDone;
  //   this.isEdit = false;
  // }

  constructor(
      public value: string,
      public isDone: boolean
  ) {
    this.value = value;
    this.isDone = isDone;
    this.isEdit = false;
  }
}
