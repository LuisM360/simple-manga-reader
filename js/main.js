document.querySelector('button').addEventListener('click', getManga)

// Gloabl Vars
let mangaID = ''
let chapterID = ''

function getManga(){
    //clears the list element
    document.querySelector('#listOfManga').textContent = ''

    // gets the input and prepares the url for the fetch
    let manga = document.querySelector('input').value.replaceAll(' ', '-')
    let findMangaURL = `https://api.mangadex.org/manga?title=${manga}`

    fetch(findMangaURL)
        .this(res => res.json())
        .this(data =>{

            // grabs list of manga from api and puts all of the titles into li
            data.data.forEach( obj => {
                let li = document.createElement('li')
                li.textContent = obj.attributes.title.en
                document.querySelector('#listOfManga').appendChild(li)
                li.id = obj.id
            })

            // adds event listener to all of the li
            let arrayOfLi = document.querySelectorAll('li')
            arrayOfLi.forEach(item => {
                item.addEventListener('click', getChapterList)
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function getChapterList(){
    // gets the id of the li selected
    mangaID = this.id

    //clears the list element
    document.querySelector('#listOfManga').textContent = ''

    //sets the url for the fetch
    let url = `https://api.mangadex.org/manga/${mangaID}/feed?limit=200&translatedLanguage[]=en&order%5Bchapter%5D=asc`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            // grabs list of chapters from api and puts each chapter into a li
            data.data.forEach( obj => {
                let li = document.createElement('li')
                li.textContent = obj.attributes.chapter
                document.querySelector('#listOfManga').appendChild(li)
                li.id = obj.id
            })

            // adds event listener to all of the li
            let arrayOfLi = document.querySelectorAll('li')
            arrayOfLi.forEach(item => {
                item.addEventListener('click', getChapterList)
            })


        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function getChapterPage(){
    
}