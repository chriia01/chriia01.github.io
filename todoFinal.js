addList = function() {
  var myLI, myBox, myPriority, myUL, myInput, myText;
  myBox= document.querySelector("#toDoItem");
  myUL = document.querySelector("#toDoList");
  myPriority= document.querySelector("#priority");
  myLI = document.createElement("li");
  myLI.classList.add(myPriority.value);
  myInput= document.createElement("Input");
  myInput.type = "Checkbox";
  myInput.addEventListener("click",doneTask);
  myText = document.createTextNode(myBox.value);
  myLI.appendChild(myInput);
  myLI.appendChild(myText);
  myUL.appendChild(myLI);
  
  }
doneTask = function() {
  if(this.checked) {
    this.parentNode.classList.add("done");
  }
  else {
    this.parentNode.classList.remove("done");
  }
}
