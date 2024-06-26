// try {
//   var images = document.querySelectorAll(".img");

//   images.forEach((image, index) => {
//     var bigImage = document.createElement("img");

//     bigImage.onload = function () {
//       image.src = this.src;
//       image.classList.remove("blur-image");
//       image.classList.add("non-blur-image");
//     };

//     setTimeout(function () {
//       var newSrc = image.src.replace("_low", "");
//       bigImage.src = newSrc;
//     }, 50);
//   });
// } catch (error) {}
