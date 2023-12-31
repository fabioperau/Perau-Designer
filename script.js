if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
}else{
  ready()
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(tmr)
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(tmr)
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  tmr = setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let totaCarrinho = document.getElementById("carrinhovalue").innerHTML

function ready(){
  const buttonFinalizar = document.getElementsByClassName("oferta-pag04")[0]
    buttonFinalizar.addEventListener("click", finalizarCompra)
    const buttonFinalizarImage = document.getElementsByClassName("carrinhoFinalizar")[0]
    buttonFinalizarImage.addEventListener("click", finalizarCompra)
}

function finalizarCompra(){
    if (totaCarrinho == "0,00"){
        alert("Seu carrinho está vazio!")
    }else{
        alert(
            `
                Obrigado pela sua compra!
                Valor do pedido: R$${totaCarrinho}
                Volte sempre :)

            `
        )
    }}