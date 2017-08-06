var executeButtons = [];

var outputLogs = [];
var maxLogsNumber = 15;

var firstExecution = true;
var errorMessage = "";
var outputArea = document.getElementById("myOutput");
outputArea.scrollTop = outputArea.scrollHeight;

window.console.log = catchOutput;


function getLogs() {
  clearOutput();
  while(outputLogs.length > maxLogsNumber) {
    outputLogs.shift();
  }
  for(var i = 0; i < outputLogs.length; i++) {
    outputArea.value += outputLogs[i]+"\n";
  }
}

function catchOutput(msg) {
  outputLogs.push(msg);
  outputArea.value += msg+"\n";
  getLogs();
}

function catchError(msg, url, lineNumber) {
  errorMessage = "\nError: " + msg;
  errorMessage += "\nIn line: " + lineNumber;
}

function executeJS() {

  var d = new Date();
  var info = d.getTime() + ": execute script with output:";

  window.onerror = catchError;

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
  var btnExecuteJS = document.getElementById('runButton');
  btnExecuteJS.onclick = function() {
    executeJS();
  }
}

createExecutorJS();
