var buttonTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Sorry,The server Is Down!! Kindly Come Back After Some Time!!!")
}

function clickHandler() {
    var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
    
};


buttonTranslate.addEventListener("click", clickHandler)