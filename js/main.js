function show(elementID) {
  var ele = document.getElementById(elementID);
  if (!ele) {
      alert("no element with that ID !");
      return;
  }
  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
  }
  ele.style.display = 'block';
}

function bounce(elementClass) {
  var ele = document.getElementsByClassName(elementClass);
  if (!ele) {
    alert("no element with that class !");
  }
  return;
}
