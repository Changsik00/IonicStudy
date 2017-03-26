export class TestDataModel {

    id = 0;
    title = "";
    body = "";
    body2 = "";

    constructor(jsonData: any) {
        this.id = jsonData.id;
        this.title = jsonData.title;
        this.body = jsonData.body;
        this.body2 = jsonData.body2;
        
    }

    toString() {
        return `id : ${this.id} , title : ${this.title} ,  body : ${this.body} ,  body2 : ${this.body2}`;
    }
}