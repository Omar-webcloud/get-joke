const jokeElement = document.getElementById("joke");
const button = document.querySelector("button");

async function getJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    jokeElement.innerText = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokeElement.innerText = "Failed to fetch a joke. Please try again.";
  }
}

button.addEventListener("click", getJoke);
