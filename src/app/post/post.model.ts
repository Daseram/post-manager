export class Post {
    public id?: string;
    public title: string;
    public description: string;
    public photoUrl?: string;
    public tags: Array<string>;

    constructor(id: string, title: string, description: string, photoUrl: string, tags: Array<string>) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photoUrl = photoUrl;
        this.tags = tags;
    }
}
