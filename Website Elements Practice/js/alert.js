document.querySelector(".alert-dismissible .close").addEventListener("click", function(event){
  var dataToDismiss = this.getAttribute("data-dismiss");
  var parentElement = this.parentElement;
    if(parentElement.classList.contains(dataToDismiss)){
      parentElement.classList.remove("show");
    }
});
