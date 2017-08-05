var executeButtons = [];

var firstExecution = true;
var errorMessage = "";


function clearOutput() {
  document.getElementById("myOutput").value = "";
}

function catchOutput(msg) {
  var outputArea = document.getElementById("myOutput");
  outputArea.value += msg+"\n";
  outputArea.scrollTop = outputArea.scrollHeight;
}

function catchError(msg, url, lineNumber) {
  errorMessage = "\nError: " + msg;
  errorMessage += "\nIn line: " + lineNumber;
}

function executeJS() {

  var d = new Date();
  var info = d.getTime() + ": execute script with output:";

  window.onerror = catchError;
  window.console.log = catchOutput;

  if(firstExecution) {
    firstExecution = false;
    clearOutput();
  }

  console.log("\n" + info);

  var js = myCodeMirror.getValue();
  var s = document.createElement('script');
  s.textContent = js;
  document.body.appendChild(s); //// might generate errors

  // console.log(errorMessage);

  // displaying error message in red

  var errorArea = document.getElementById('errors');
  errorArea.value = errorMessage;

  // errorMsgSpan.textContent = errorMessage;
  // errorMsgSpan.style.color = "red";
  // document.getElementById("myOutput").appendChild(errorMsgSpan);

  // clear the message
  errorMessage = "";
}

function createExecutorJS() {
  var btnExecuteJS = document.createElement('button');
  btnExecuteJS.textContent = "Run JS";
  btnExecuteJS.onclick = function() {
    executeJS();
  }
  executeButtons.push(btnExecuteJS);
  document.body.appendChild(btnExecuteJS);
}

createExecutorJS();
