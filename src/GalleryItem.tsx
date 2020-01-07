export default class GalleryItem {
  url: string;
  title: string;
  desc: string;

  constructor(url: string, title: string, desc: string) {
    this.url = url;
    this.title = title;
    this.desc = desc;
  }
}