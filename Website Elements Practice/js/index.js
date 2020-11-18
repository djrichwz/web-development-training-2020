// Document Event Listeners

document.addEventListener("close.alert", function(e){
  console.log("alert is closing");
}, false);

document.addEventListener("closed.alert", function(e){
  console.log("alert has closed");
}, false);
