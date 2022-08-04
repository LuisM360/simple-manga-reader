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
}

function getChapterList