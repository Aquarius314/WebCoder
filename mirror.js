var myTextArea = document.querySelector('textarea');

var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  lineNumbers: true,
  mode: "javascript",
  matchBrackets: true,
});

myCodeMirror.setSize(null, 416);
