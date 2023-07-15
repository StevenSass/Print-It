const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//compteur des Slides // numero des slides
let slideDefaut = 0

//permert de lire les fleches
let baliseArrowLeft = document.querySelector(".arrow_left")
baliseArrowLeft.addEventListener("click", function() {
	slideDefaut--
	if (slideDefaut < 0) {
		slideDefaut = 3
	}
	let slideEnCours = slides[slideDefaut]
	console.log(slideEnCours)
	console.log(slideDefaut)
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.setAttribute("src", "./assets/images/slideshow/"+slides[slideDefaut].image)
	let textTest = document.querySelector(".banner-text")
	textTest.innerHTML = slides[slideDefaut].tagLine
})

let baliseArrowRight = document.querySelector(".arrow_right")
baliseArrowRight.addEventListener("click", function() {
	slideDefaut++
	if (slideDefaut > 3) {
		slideDefaut = 0
	}
	let slideEnCours = slides[slideDefaut]
	console.log(slideEnCours)
	console.log(slideDefaut)
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.setAttribute("src", "./assets/images/slideshow/"+slides[slideDefaut].image)
	let textTest = document.querySelector(".banner-text")
	textTest.innerHTML = slides[slideDefaut].tagLine
})

// boucle pour ajouter les dot en fonction du nombre de slides

for (let compteur = 0; compteur < slides.length; compteur++){
	let baliseDot = document.createElement("p")
	baliseDot.classList.add("dot")

	let baliseDots = document.querySelector(".dots")
	baliseDots.appendChild(baliseDot)
	
}

