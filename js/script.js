"use strict"

let ul = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => {for (let album of albums){
        let li = document.createElement('li');
        li.classList.add('album_title'); 
        li.innerHTML = album.title;
        ul.append(li);
    }})
    .catch(error => console.error(error));
    