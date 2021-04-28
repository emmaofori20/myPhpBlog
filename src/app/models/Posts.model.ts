export class Posts
{
  public Categories_id: number;
  public Categories_Name:string;
  public date: string;
  public body: string;
  public title: string;

  constructor(Name:string, date:string, id:number, body: string, title: string){
    this.Categories_Name=Name;
    this.date=date;
    this.title= title;
    this.body= body;
    this.Categories_id=id;
  }
}
