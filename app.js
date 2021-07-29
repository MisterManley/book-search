// ??Protocol HTTPS
// HOST googleapis.com
// PORT: 80/443
// PATH /books/v1/volumes
// QUERY q=harry+potter

// https://www.googleapis.com/books/v1/volumes/q=harry+potter


const formEl = document.getElementById("book-form");
const searchEl = document.getElementById("search-term");
const bookEl = document.querySelector("#book");



function handleSubmit(event){
    event.preventDefault();   //stops form from refreshing the page

    const url = "https://www.googleapis.com/books/v1/volumes?q=";
        
        fetch(url + searchEl.value)
        .then((response) => {
            return response.json()
        })
        /*
            <div>
                <h2>title goes here</h2>
                <p>authors go here</p>
                <p>the description goes here</p>
                <img src="the link goes here">
            </div>
        */
        
        
        
        
        .then((data) => {
    
        //All the DOM elements we need
        
        let divEl = document.createElement('div');
        let titleEl = document.createElement('h2');
        let authorEl = document.createElement('p');
        let descriptionEl = document.createElement('p');
        let ImgEl = document.createElement('img')

        //Handy variables

        let books = data.items;
        console.log(books[0]);
        let authors = books[0].volumeInfo.authors;
        let title = books[0].volumeInfo.title;
        let thumbnail = books[0].volumeInfo.imageLinks.thumbnail;
        let description = books[0].volumeInfo.description;

        //Fill out the DOM elements with our data

        authorEl.textContent = `Authors: ${authors}`;
        titleEl.textContent = title;
        descriptionEl.textContent = description;
        ImgEl.setAttribute("src", thumbnail);

        //Add to DOM
        bookEl.textContent = "";  //Clear Old Books
        divEl.append(titleEl, authorEl, descriptionEl, ImgEl)
        bookEl.append(divEl);  //add the new one

        console.log(authors, title, thumbnail, description);
    })
}

formEl.addEventListener("submit", handleSubmit);
