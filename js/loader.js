var preLoader = document.getElementById("loader");
var body = document.getElementsByTagName("body")[0];

const applyLoader = function removeLoader() {
  preLoader.style.display = "none";
};

body.onload = applyLoader;
