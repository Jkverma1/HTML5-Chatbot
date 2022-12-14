const utterances = [
  [
    "how are you",
    "how is life",
    "how are things",
    "How are you doing",
    "How are you going",
  ], //0
  [
    "hi",
    "hey",
    "hello",
    "good morning",
    "good afternoon",
    "what's up",
    "what is up",
  ], //1
  ["what are you doing", "what is going on"], //2
  ["how old are you"], //3
  ["who are you", "are you human", "are you bot", "are you human or bot"], //4
  ["good morning"], //5
  ["good evening"], //6
  ["good morning"], //7
  ["good night"], //8
  ["can you help me?"], //9
];
// Possible responses corresponding to triggers

const answers = [
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ], //0
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"], //1
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ], //2
  ["I am infinite"], //3
  [
    "I am just a bot",
    "I am a bot. how are you?",
    "I am a robot, but I'm a good one. Let me prove it. How can I help you?",
  ], //4
  ["Good Morning! How Can I help you?"], //5
  ["good evening! How Can I help you?"], //6
  ["good morning! How Can I help you?"], //7
  ["good night! How Can I help you?"], //8
  ["Definetely! Please tell me how can i help you?"], //9
];

// For any other user input

const alternatives = ["Go on...", "Try again", "Tell me more!"];

function compare(utterancesArray, answersArray, string) {
  let item;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        items = answersArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `${input}`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  } else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  //update  DOM
  addChatEntry(input, product);
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  document.querySelector("#input").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      console.log("You pressed the enter button!");
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});
