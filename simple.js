const texts = ["Full Stack Developer", "Frontend Specialist", "Backend Expert"];
let count = 0, index = 0, currentText = "", letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
}
type();

