export class Article {
  constructor(
    public id?: number,
    public heading?: string,
    public shortDescription?: string,
    public content?: string,
    public date?: Date,
    public author?: string,
    public sourceUrl?: URL ) { }
}
