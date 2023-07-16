function toggleMode() {
  const html = document.documentElement
   html.classList.toggle("light")
  
   // outro modo de fazer
   //if(html.classList.contains("light")){
  //  html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //}

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
  //se tiver light modo adicionar a imagem light
  img.setAttribute("src", "./assets/avatar.png")
} else {
  // se estiver sem o light mode  manter a mesma imagem
  img.setAttribute("src", "./assets/du1.png") 
 }
}
