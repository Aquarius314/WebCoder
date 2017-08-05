var languageButtons = [];
// var option = "JavaScript";

function setLanguage(language) {
  myCodeMirror.setOption("mode", language.toLowerCase());
  console.log("Changing code language to " + language);
  for(var i = 0; i < languageButtons.length; i++) {
    if(language === languageButtons[i].textContent) {
      languageButtons[i].style.border = "4px solid darkgreen";
    }
    else {
      languageButtons[i].style.border = "2px solid black";
    }
  }
}

// create buttons
function createLanguageOptionButton(language) {
  var langBtn = document.createElement('button');
  langBtn.textContent = language;

  langBtn.onclick = function(e) {
    // e.stopPropagation();
    setLanguage(langBtn.textContent);
  }

  languageButtons.push(langBtn);
  document.body.appendChild(langBtn);
}

// createLanguageOptionButton("JavaScript");
// createLanguageOptionButton("Java");
// createLanguageOptionButton("C++");
// createLanguageOptionButton("Python");
// createLanguageOptionButton("Shell");
