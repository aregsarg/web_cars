// let cars = document.querySelectorAll("new-car-img")

// let data = {
//    currentIndex:0,
// 	 photos: [
// 		"img/new-cars-model/ncm1.png",
// 		"img/new-cars-model/ncm2.png",
// 		"img/new-cars-model/ncm3.png"
// 	 ]

// }

// nextBtn.onclick = function(){
// 	data.currentIndex++
// 	if(data.currentIndex>3){
// data.currentIndex = 0
// 	}
// 	cars.src = data.photos[data.currentIndex]
// }

// prevBtn.onclick = function(){
// 	data.currentIndex--
// 	if(data.currentIndex<0){
// data.currentIndex = 3
// 	}
// 	cars.src = data.photos[data.currentIndex]
// }
// let cars = document.querySelector(".new-car-img");
// let nextBtn = document.getElementById("nextBtn");
// let prevBtn = document.getElementById("prevBtn");

// let data = {
//   currentIndex: 0,
//   photos: [
//     "img/new-cars-model/ncm1.png",
//     "img/new-cars-model/ncm2.png",
//     "img/new-cars-model/ncm3.png",
//   ],
// };

// nextBtn.onclick = function () {
//   data.currentIndex++;
//   if (data.currentIndex >= data.photos.length) {
//     data.currentIndex = 0;
//   }
//   cars.src = data.photos[data.currentIndex];
// };

// prevBtn.onclick = function () {
//   data.currentIndex--;
//   if (data.currentIndex < 0) {
//     data.currentIndex = data.photos.length - 1;
//   }
//   cars.src = data.photos[data.currentIndex];
// };
// let slides = document.querySelector(".slides");
//   let nextBtn = document.getElementById("nextBtn");
//   let prevBtn = document.getElementById("prevBtn");
//   let slideWidth = document.querySelector(".slide").clientWidth;
// 	let dots = document.querySelector(".dots")
// 	let dot = document.querySelectorAll(".dot")
//   let currentIndex = 0;

//   nextBtn.onclick = function () {
//     currentIndex++;
//     if (currentIndex >= slides.children.length) {
//       currentIndex = 0;
//     }
//     slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
//   };

//   prevBtn.onclick = function () {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = slides.children.length - 1;
//     }
//     slides.style.transform =` translateX(${-slideWidth * currentIndex}px)`;
//   };
// 	dots.onclick = function  () {
		
// 	}

// document.addEventListener("DOMContentLoaded", function () {
// 	let slides = document.querySelector(".slides");
// 	let nextBtn = document.getElementById("nextBtn");
// 	let prevBtn = document.getElementById("prevBtn");
// 	let dotsContainer = document.querySelector(".dots");
// 	let currentIndex = 0;
// 	let slideWidth = document.querySelector(".slide").clientWidth;

// 	nextBtn.onclick = function () {
// 		currentIndex++;
// 		if (currentIndex >= slides.children.length) {
// 			currentIndex = 0;
// 		}
// 		updateSlider();
// 	};

// 	prevBtn.onclick = function () {
// 		currentIndex--;
// 		if (currentIndex < 0) {
// 			currentIndex = slides.children.length - 1;
// 		}
// 		updateSlider();
// 	};

// 	dotsContainer.addEventListener("click", function (event) {
// 		if (event.target.classList.contains("dot")) {
// 			currentIndex = Array.from(dotsContainer.children).indexOf(event.target);
// 			updateSlider();
// 		}
// 	});

// 	function updateSlider() {
// 		slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
// 		updateDots();
// 	}

// 	function updateDots() {
// 		let dots = Array.from(dotsContainer.children);
// 		dots.forEach((dot, index) => {
// 			dot.classList.toggle("active", index === currentIndex);
// 		});
// 	}
// });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}