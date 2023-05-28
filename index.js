let imagemAtual = 1;
mostrarImagem(imagemAtual);

function mudarImagem(n) {
  mostrarImagem(imagemAtual += n);
}

function mostrarImagem(n) {
  let imagens = document.getElementsByTagName("img");
  if (n > imagens.length) {
    imagemAtual = 1;
  }
  if (n < 1) {
    imagemAtual = imagens.length;
  }
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }
  imagens[imagemAtual - 1].style.display = "block";
}