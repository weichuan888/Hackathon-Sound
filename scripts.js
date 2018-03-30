/* var Explain = document.getElementsByClassName("li");
Explain.forEach(function(element) {
  element.addEventListener("click", function(event) {
    if (element.style.display == "none") {
      element.style.display = block;
    } else {
      element.style.display = none;
    }
  });
});
 */
var z = document.getElementsByClassName("li-un");
z.scrollTop = z.scrollHeight;
var z1 = document.getElementsByClassName("li-deux");
z.scrollTop = z.scrollHeight;
var z2 = document.getElementsByClassName("li-trois");
z.scrollTop = z.scrollHeight;

function More() {
  var x = document.getElementsByClassName("plus");

  /*   var arr = Array.from(x);
  console.log(arr);

  arr.forEach(e => {
    if (e.style.display === "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  });
} */
  x.forEach(element => {
    if (element[0].style.display === "block") {
      element[0].style.display = "none";
    } else {
      element[0].style.display = "block";
    }
  });
}
