function generateJoke(event) {
    event.preventDefault();

    let jokeElement = document.querySelector("#joke")

    jokeElement.innerHTML = "Funny joke";

}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);