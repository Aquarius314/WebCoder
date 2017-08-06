var btnClear = document.getElementById('clearButton');
btnClear.onclick = function() {
  clearOutput();
}

function clearOutput() {
  outputArea.scrollTop = outputArea.scrollHeight;
  outputArea.value = "";
}
