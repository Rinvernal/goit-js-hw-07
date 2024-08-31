const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");
textInput.addEventListener("input", (event) =>{
  const contentSpan = event.currentTarget.value.trim();
  if (contentSpan === "") {
    textSpan.textContent = "Anonymous";
  } else {
    textSpan.textContent = contentSpan;
  }
  
});