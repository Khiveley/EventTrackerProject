export class Study {

  id: number;
  language: string;
  focus: string;
  studyDate: string;
  start: string;
  end: string;
  comment: string;
  imageUrl: string;
  pages: string;
  source: string;


  constructor(
    id: number = 0,
    language: string = '',
    focus: string = '',
    studyDate: string = '',
    start: string = '',
    end: string = '',
    comment: string = '',
    imageUrl: string = '',
    pages: string = '',
    source: string = '',

  ){
    this.id = id;
    this.language = language;
    this.focus = focus;
    this.studyDate = studyDate;
    this.start = start;
    this.end = end;
    this.comment = comment;
    this.imageUrl = imageUrl;
    this.pages = pages;
    this.source = source;
  }
}
