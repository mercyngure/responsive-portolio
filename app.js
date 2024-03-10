const typedTextElement = document.querySelector('.letter');
const strings = ["MERCY NGURE","Frontend Developer", "Web Developer", "UI/UX Developer"];
let currentStringIndex = 0;
let currentCharIndex = 0;

function typeString() {
  if (currentStringIndex < strings.length) {
    if (currentCharIndex < strings[currentStringIndex].length) {
      typedTextElement.textContent += strings[currentStringIndex][currentCharIndex];
      currentCharIndex++;
      setTimeout(typeString, 50);
    } else {

      setTimeout(eraseString, 1000);
    }
  } else {
  
    currentStringIndex = 0;
    currentCharIndex = 0;

    setTimeout(typeString, 1000);
  }
}

function eraseString() {
  if (typedTextElement.textContent.length > 0) {

    typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
    setTimeout(eraseString, 50);
  } else {
  
    currentStringIndex++;
    currentCharIndex = 0;
  
    setTimeout(typeString, 1000);
  }
}
typeString();