// Obtém todas as imagens e informações das composições
const imagensComposicao = document.querySelectorAll('.imagem-composicao');
const infosComposicao = document.querySelectorAll('.composicao-info');

// Adiciona um event listener para cada imagem de composição
imagensComposicao.forEach((imagem, index) => {
  imagem.addEventListener('click', () => {
    // Verifica se a informação está visível ou oculta
    if (infosComposicao[index].style.maxHeight === '0px') {
      // Se estiver oculta, mostra a informação
      infosComposicao.forEach(info => info.style.maxHeight = '0px');
      infosComposicao[index].style.maxHeight = infosComposicao[index].scrollHeight + 'px';
    } else {
      // Se estiver visível, oculta a informação
      infosComposicao[index].style.maxHeight = '0px';
    }
  });
});
