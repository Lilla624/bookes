/*
* File: app.js
* Author: Varga Lilla
* Copyright: 2024, Varga Lilla
* Group: SZOFT I-1-N
* Date: 2024-05-07
* Github: https://github.com/Lilla624/
* Licenc: GNU GPL
*/

const doc = {
    booksBody: document.querySelector('#booksBody')
}

const state = {
    booksList: []
}

function getBooks() {
    const url = 'http://localhost:8000/books';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.booksList = result
        renderTable();
    });
}

function renderTable() {
    console.log('renderelés...');
    state.booksList.forEach( books => 
    {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${books.id}</td>
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.price}</td>
        `;
        doc.booksBody.append(tr);
    })
}

getBooks();

