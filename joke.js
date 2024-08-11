function generateJoke(event) {
    event.preventDefault();
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);