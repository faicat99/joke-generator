function displayJoke(response) {

    console.log(response.data.answer);
}

function generateJoke(event) {
    event.preventDefault();
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let prompt = "Generate a short joke about Ireland";
    let context = "You a funny AI assistant, that tells short and sweet jokes";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);