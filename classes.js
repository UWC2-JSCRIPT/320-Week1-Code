class Book {
    constructor(title) {
        console.log('this before the title assignment', this);

        this.title = title.toUpperCase();
        
        console.log('this after the title assignment', this);
    }

    printTitle() {
        console.log(this.title);
    }
}

class ComicBook extends Book {
    constructor(title, issueNumber) {
        super(title);

        console.log('this after the super call', this);

        this.issueNumber = issueNumber;

        console.log('this after the issueNumber assignment', this);
    }
}

// const mountaineeringBook = new Book('Mountaineering: Freedom of the Hills');
// mountaineeringBook.printTitle();

const comicBook = new ComicBook('Walking Dead', 10);
// console.log(comicBook);