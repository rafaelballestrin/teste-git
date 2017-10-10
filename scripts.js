let janelinha = document.querySelector('.janelinha')
let imagemDoBanner = document.querySelector('.banner img');

let bannersQueTrocam = [
  'images/bannerModernFamily.jpg',
  'images/bannerModernFamily2.jpg',
  'images/bannerModernFamily3.jpg',
]

let posicaoBanner = 0;

function trocarBanner() {
  posicaoBanner++

  if (posicaoBanner == bannersQueTrocam.length) {
    posicaoBanner = 0
  }

  let alteraCaminhoImg = bannersQueTrocam[posicaoBanner]
  imagemDoBanner.src = alteraCaminhoImg

}

function alternarJanelinha() {
  if (janelinha.style.display == 'block') {
    // Executa isso aqui
    janelinha.style.display = 'none';

  } else {
    janelinha.style.display = 'block';
  }

}

setInterval(trocarBanner, 1000);
