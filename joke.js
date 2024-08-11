function displayJoke(response) {

    let jokeElement = document.querySelector("#joke")

    jokeElement.innerHTML = response.data.answer;

    console.log(response.data.answer);
}

function generateJoke(event) {
    event.preventDefault();
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let prompt = "Generate a short joke about Ireland";
    let context = "You a funny AI assistant, that tells short and sweet jokes. Please answer with basic HTML";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);