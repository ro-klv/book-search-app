import express from 'express';
import fetch from 'node-fetch';

import { BookList } from "../model/BookList.js";


var router = express.Router();
var bookList = new BookList();

router.post('/search', function(req, res, next) {
    const keyword = req.body.keyword;
    fetch('https://reststop.randomhouse.com/resources/titles?search='+keyword , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        }
    }
      )
    .then(
        (response) => response.json()
    ).then(
     
        json=> {
            res.render('list', { title: 'Search', results :  json.title});
        }
    )   
    .catch(
        error => console.log(error)
    );
   
});




router.post('/add', function(req, res) {

  let book = {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    review : req.body.review 
  };
  
  let msg = bookList.addBook(book);
  res.json({msg:msg});

  })
  

  
  router.get('/list', function(req, res) {
      res.render('favorlist', {list : bookList.myList, title : 'Favorite List'})
      })
      
 
  
  router.delete('/', function(req, res, next) {
    bookList.deleteBook(req.body.isbn);
    res.json({msg : 'deleted'});
  })


  router.post('/edit', function(req, res) {
    let bookToEdit = bookList.findById(req.body.isbn);
    res.render('edit', {title : 'Favorite Edit', result : bookToEdit});
  })

  router.post('/update', function(req, res) {
    let book = {
        isbn :req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        review : req.body.review        
    }
    bookList.updateBook(book);
    res.render('favorlist', {list : bookList.myList, title : 'Favorite List'})
  })



  router.post('/filter', function(req, res) {
    let filteredList = bookList.getFiltered(req.body.keyword);
    res.render('favorlist', {list : filteredList, title : 'Favorite List'});
  })
  

  
   export {router};