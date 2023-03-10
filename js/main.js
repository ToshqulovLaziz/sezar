// Get the form elements
const elFormInput = document.querySelector(".js-form-input");
const elMatnInput = document.querySelector(".js-matn-input");
const elFormOut = document.querySelector(".js-form-output");
const elShifrMatn = document.querySelector(".js-shifr-matn");
const elCopyBtn = document.querySelector(".js-copy-btn");

function shifrFunc(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
    }
    else if (char >= 97 && char <= 122) {
      result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
    }
    else {
      result += text.charAt(i);
    }
  }
  return result;
}

function decrypt(text, shift) {
  return  shifrFunc(text, 26 - shift);
}
elFormInput.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  const shift = 6;

  elShifrMatn.value = shifrFunc(elMatnInput.value, shift);
});

elCopyBtn.addEventListener("click", function() {
  elShifrMatn.select();
  document.execCommand("copy");
});


