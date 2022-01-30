
class BookList {

constructor() {       
     this.myList  = [];
}


addBook(book) {
    let exists = false ;
    for (let i = 0; i <  this.myList.length; i++) {
            if( this.myList[i].isbn == book.isbn){
                exists = true; 
            };       
    };

    if(exists){
        return 'exist';
      }
    else {
        this.myList.push(book);
        return 'Ok';
    }
}



 deleteBook(id) {
    for (let i = 0; i < this.myList.length; i++) {
        if(this.myList[i].isbn == id){
            this.myList.splice(i, 1);  
        }
    }
 };


  updateBook(book)  {
    for (let i = 0; i < this.myList.length; i++) {
        if(this.myList[i].isbn == book.isbn){
            this.myList[i].review = book.review;
            this.myList[i].author = book.author;
            this.myList[i].title = book.title;
        }
    }
    };


 findById(id) {
    for (let i = 0; i < this.myList.length; i++) {
        if(this.myList[i].isbn == id){
            return this.myList[i]; 
        }
    }
 };

 getFiltered(keyword){
    let flist = [] ;
    let filtered ;
    let key = (keyword).toUpperCase();
    
    for (let i = 0; i < this.myList.length; i++) {
        if( ( (this.myList[i].isbn)==(key) ) || ( (this.myList[i].author).includes(key) ) || ( (this.myList[i].title).includes(key) ) ){
            filtered = this.myList[i];
            flist.push(filtered);
      };
    }

    return flist;
}


}

export {BookList };