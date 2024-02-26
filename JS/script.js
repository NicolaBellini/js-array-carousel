// creating the array with all the carusel images
const images = [
  "/ASSETS/consegna/img/01.webp",
  "/ASSETS/consegna/img/02.webp",
  "/ASSETS/consegna/img/03.webp",
  "/ASSETS/consegna/img/04.webp",
  "/ASSETS/consegna/img/05.webp",
]

// elements of the html
let caruselImage = document.querySelector(".carusel-image")


for(let i = 0; i < images.length; i++){
  caruselImage.innerHTML += `
  <img class="img" src="${images[i]}"> 
  `
  //da aggiungere hide class

  
}

console.log(images, caruselImage);



console.log("ciao");