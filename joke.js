function displayJoke(response) { 
    
    new Typewriter("#joke", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 30,
    });
}

function generateJoke(event) {
    event.preventDefault();
    let apiKey = "bafb81c036f1dc4bfbb21532bb2ot295";
    let prompt = "Generate a short joke about Ireland.";
    let context = "You a funny AI assistant, that tells short and sweet jokes. The joke must be provided in basic HTML";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let jokeElement = document.querySelector("#joke");

    jokeElement.innerHTML = "Generating a joke for you, please wait..."


    console.log("called the AI api");
    axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);