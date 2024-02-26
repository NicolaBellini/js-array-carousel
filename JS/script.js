// creating the array with all the carusel images
const images = [
  "/ASSETS/consegna/img/01.webp",
  "/ASSETS/consegna/img/02.webp",
  "/ASSETS/consegna/img/03.webp",
  "/ASSETS/consegna/img/04.webp",
  "/ASSETS/consegna/img/05.webp",
]

// elements
const caruselImage = document.querySelector(".carusel-image")
// arrows
const upArrow = document.querySelector(".up")
const downArrow = document.querySelector(".down")


// counter
let counter = 0


for(let i = 0; i < images.length; i++){
  
  // la variabile img equivale all elemento images con indice i
  const img = images[i];

  // add with the for loop all the images
  caruselImage.innerHTML += `<img class="img hide" src="${img}">`;
}

// freccia sopra
upArrow.addEventListener("click", function(){


  // if(counter === images.length-1){
  //   // upArrow.classList.add("hide")
  //   counter = 0

  // }else{
  //   counter++
  // }

  // let previousIndex 
  // if(counter === 0){
  //   images.length - 1
  // }else{
  //   counter - 1
  // }

  // imagesCollection[previousIndex].classList.add("hide")


  // aggiungo la classe hide all elemento con counter non ancora incrementato
  imagesCollection[counter++].classList.add("hide");
  // tolgo la classe hide all elemneto con contatore incrementato
  imagesCollection[counter].classList.remove("hide")

  if(counter === images.length-1){
   upArrow.classList.add("hide")
  }

  // se il counter raggiunge l ultimo elemento dell array la freccia su acquisisce hide


  downArrow.classList.remove("hide")


  // console.log(counter);

})




downArrow.classList.add("hide")

// freccia sotto
downArrow.addEventListener("click", function(){

  upArrow.classList.remove("hide")

// aggiungo la classe hide all elemento con contatore decrementato 
  imagesCollection[counter--].classList.add("hide");
// tolgo la classe hide all elemento con il contatore decrementato
  imagesCollection[counter].classList.remove("hide")

  // se il contatore raggiunge lo 0, quindi il limite dell array la freccia in giu riceve la classe hide
  if(counter === 0){
    downArrow.classList.add("hide")
  }

  console.log(counter);
})

// tutte le immmagini che ho aggiunto le raccolgo in questa costante che poi mmi permetterà di modificarne la classe
const imagesCollection = document.getElementsByClassName("img");
// grazie all uso del contatore rimuovo la classe hide all immagine desiderata
imagesCollection[counter].classList.remove("hide");



console.log( imagesCollection);




console.log("ciao");