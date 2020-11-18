


document.querySelector(".alert-dismissible .close").addEventListener("click", function(event){
  var dataToDismiss = this.getAttribute("data-dismiss");
  var parentElement = this.parentElement;

  document.dispatchEvent(new Event("closed.alert"));

  if(parentElement.classList.contains(dataToDismiss)){
    dismiss(parentElement);
  }
});



function dismiss(element){
  if(element.classList.contains("show") && element.classList.contains("fade")){
    element.classList.remove("show");

    setTimeout(function(){
      element.remove();
    }, 200)
  }
  else{
    element.remove();
  }

}
