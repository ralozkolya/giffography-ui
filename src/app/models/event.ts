export class Event {
  constructor(
    public id: number,
    public name: string,
    public parent_id: number,
    public thumb: File) {}
}
