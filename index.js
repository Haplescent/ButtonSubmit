message.style.color = "red";

function myFunction() {
  var x = document.getElementById("message");
  if (x.style.color === "red") {
    x.style.color = "blue";
  } else if (x.style.color === "blue") {
    x.style.color = "red";
  }
}
