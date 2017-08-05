var btnClear = document.createElement('button');
btnClear.textContent = "Clear console";
btnClear.onclick = function() {
  document.getElementById("myOutput").value = "";
}
document.body.appendChild(btnClear);
