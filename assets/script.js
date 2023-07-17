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
const bannerImg = document.querySelector(".banner-img")
const textTest = document.querySelector(".banner-text")

// boucle pour ajouter les dot en fonction du nombre de slides

for (let compteurBalise = 0; compteurBalise < slides.length; compteurBalise++){
	//crée un element <p></p>
	const baliseDot = document.createElement("p")
	//ajoute la classe dot dans la balise
	baliseDot.classList.add("dot")
	//selection du parent ou inserer notre balise <p></p>
	const baliseDots = document.querySelector(".dots")
	//mise en place de la liaison parent / enfant
	baliseDots.appendChild(baliseDot)
	//creation et mise en place du dot de depart en selected
	
}
const baliseDotAll = document.querySelectorAll(".dot")
baliseDotAll[0].classList.add("dot_selected")



//fleche et fonctionement ===== >
//selection de la fleche et mise en place de la fonction
const baliseArrowLeft = document.querySelector(".arrow_left")
baliseArrowLeft.addEventListener("click", function() {
	//cela effectue un compte pour gerer les slide en cours et le compteur lorsque'on apuie sur les fleche
	slideDefaut--
	if (slideDefaut < 0) {
		slideDefaut = 3
	}
	//let slideEnCours = slides[slideDefaut]
	//fin de l'etape
	//changement de attribue / image avec pour base le compte precedent
	bannerImg.setAttribute("src", "./assets/images/slideshow/"+slides[slideDefaut].image)
	//fin de l'etape
	//mise en place du innerhtml pour inserer le text mis en place dans le tableau "slides"
	textTest.innerHTML = slides[slideDefaut].tagLine
	//fin de l'etape
	baliseDotAll.forEach((dot) => {
		dot.classList.remove("dot_selected")
	})
	baliseDotAll[slideDefaut].classList.add("dot_selected")
	
})
//fleche et fonctionement ===== >
//selection de la fleche et mise en place de la fonction
let baliseArrowRight = document.querySelector(".arrow_right")
baliseArrowRight.addEventListener("click", function() {
	//cela effectue un compte pour gerer les slide en cours et le compteur lorsque'on apuie sur les fleche
	slideDefaut++
	if (slideDefaut > 3) {
		slideDefaut = 0
	}
	//fin de l'etape
	//changement de attribue / image avec pour base le compte precedent
	bannerImg.setAttribute("src", "./assets/images/slideshow/"+slides[slideDefaut].image)
	//fin de l'etape
	//mise en place du innerhtml pour inserer le text mis en place dans le tableau "slides"
	textTest.innerHTML = slides[slideDefaut].tagLine
	//fin de l'etape
	baliseDotAll.forEach((dot) => {
		dot.classList.remove("dot_selected")
	})
	baliseDotAll[slideDefaut].classList.add("dot_selected")

})

