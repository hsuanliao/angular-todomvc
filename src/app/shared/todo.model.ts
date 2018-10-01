export class Todo {
  public isEditMode: boolean;

  constructor(
    public value: string,
    public isDone: boolean
  ) {
    this.isEditMode = false;
  }
}
