function helloConsole(){
   console.log("Hello, Console!");
}

function helloPopup(){
   alert("Hello, Popup!");
}

function helloElement(){
   var a=document.getElementById("browser");
   a.innerHTML="Hello, Browser!";
}

function helloStranger(){
  var b=prompt("Type your Name");
  var c=document.getElementById("name");
  c.innerHTML="Hello, " + b;
}
