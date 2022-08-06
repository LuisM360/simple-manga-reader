# Manga Reader
Search for any manga in the MangaDex API. Please search for the specific manga chapter and click on it. It then will load the chapter page.

## How It's Made:
**Tech used:** HTML, CSS, JavaScript

The design is straightforward with just a form input, a button, and some CSS. The javascript is connected with the button with an event listener. When the user inputs a manga name, it will send a request to the API and return an obj. Then JavaScript outputs the manga titles for the user to select from. Once the user selects the title they want, javascript will send another request to the API and return an obj with the list of chapters from that manga title. Now the user will have a list of chapters to choose from. When they select the chapter they want, javascript will send its last API request, return an obj with all the chapter pages, and load them to the DOM. Now the user can enjoy the chapter that they chose.
