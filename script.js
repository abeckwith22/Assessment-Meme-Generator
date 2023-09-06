/*
- The HTML page shows a form with three input optinos - Top Text, Bottom, Text, Image - and a submit button **DONE**
- Users should be able to submit a form on the page to generate a new meme on the page **DONE**
- They should be able to add multiple memes to the page by submitting the form multiple times **DONE**
- Users should be able to click on a button to delete/remove ameme from the page**DONE**
the form boxes should clear out automatically after the submit is clicked **DONE**
- The forms fields need to have validation so they will not submit if a field is missing **DONE**
- Be sure to style your meme geneartor! It should be functional but also look nice
- Only use vanilla JavaScript: no frameworks/third-party libraries are allowed **DONE**
*/
const form = document.querySelector('#meme-submit');
const memeList = document.querySelector('#meme-list');

// Event listeners
memeList.addEventListener("click", function(event){
    if (event.target.localName == "button"){
        event.target.parentElement.remove();
    }
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    let top = document.querySelector('#top');
    let bottom = document.querySelector('#bottom');
    let image = document.querySelector('#image');
    createMeme(top.value, bottom.value, image.value);
    top.value = '';
    bottom.value = '';
    image.value = '';
});

// Generating a meme on page
function createMeme(topText, bottomText, image){
    const meme = document.createElement('div');
    const memeImage = new Image();
    const memeTopText = document.createElement('h1');
    const memeBottomText = document.createElement('h1');
    const removeButton = document.createElement('button');

    memeImage.src = image;
    memeTopText.innerText = topText;
    memeBottomText.innerText = bottomText;
    removeButton.innerText = "Remove Meme";

    meme.classList.toggle('meme');
    memeImage.classList.toggle('meme-image');
    memeTopText.classList.toggle('top-text');
    memeBottomText.classList.toggle('bottom-text');
    removeButton.classList.toggle('remove-button');


    meme.append(memeImage);
    meme.append(memeTopText);
    meme.append(memeBottomText);
    meme.append(removeButton);

    memeList.append(meme);
}
