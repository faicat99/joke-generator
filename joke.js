function displayJoke(response) {

    let jokeElement = document.querySelector("#joke")

    jokeElement.innerHTML = response.data.answer;

    console.log(response.data.answer);
}

function generateJoke(event) {
    event.preventDefault();
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let prompt = "Generate a short joke about Ireland. Please answer with basic HTML";
    let context = "You a funny AI assistant, that tells short and sweet jokes.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let jokeElement = document.querySelector("#joke");

    jokeElement.innerHTML = "Generating a joke for you, please wait..."


    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);