
function deleteBook(isbn) {

    var data = {isbn : isbn};
    fetch('/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            if(json.msg == 'deleted') {
                alert('Successfully deleted.');
                window.location.reload();
             }
             })
        .catch(error => {
        console.log(error)
        })  ;
}
 

function editBook(isbn) {
    document.getElementById('isbn').setAttribute('value', isbn);
     document.getElementById('favor_edit_form').submit();    
}



 function addBook(title, author, isbn ) {

    let data = {
        title : title,
        author : author,
        isbn : isbn,
        review : '' ,       
        
    };

    fetch('/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            if(json.msg == 'Ok') {
                alert('Successfully added!')
            }else if( json.msg == 'exist') {
                alert('This has already added.')
            }
        })
        .catch(error => {
        console.log(error)
        })  ;  
}