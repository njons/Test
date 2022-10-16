console.log("hello from script file!");
import "components/greeting-message.js";
import "components/employee-card.js";

//import "../components/greeting-message.js"

const button = document.getElementById("hello");

button.addEventListener("click", () => {
  console.log("you clicked the button");
  button.style.backgroundColor = "yellow";
});
