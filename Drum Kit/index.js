
var buttons = document.querySelectorAll("button");
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    alert("I got clicked");
  });
}
