window.onload = function () {
  const logo = document.getElementById('logo');
  const line1 = document.getElementById('line1');
  const nextBtn = document.getElementById('nextBtn');
  const line2 = document.getElementById('line2');
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const yesBtn = document.getElementById('yes');
  const noBtn = document.getElementById('no');
  const finalMessage = document.getElementById('finalMessage');
  const signature = document.querySelector('.gabbie-signature');
  const failMessage = document.getElementById('failMessage');
  const viewLink = document.getElementById('reaction-link');
  const videoContainer = document.getElementById('videoContainer');
  const sadMusic = document.getElementById('sadMusic');

  // Etapa 1: Mostra o logo
  setTimeout(() => {
    logo.style.opacity = 1;
  }, 1000);

  // Etapa 2: Mostra o primeiro texto
  setTimeout(() => {
    line1.style.opacity = 1;
  }, 5000);

  // Etapa 3: Exibe botão "Próximo"
  setTimeout(() => {
    nextBtn.style.display = 'inline-block';
  }, 8000);

  // Ao clicar em "Próximo"
  nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none';
    line2.style.opacity = 1;
    line1.remove();
    setTimeout(() => {
      question.style.opacity = 1;
    }, 3500);
    setTimeout(() => {
    signature.style.opacity = 1;
    }, 5500);
    setTimeout(() => {
      choices.style.display = 'block';
    }, 8000);
  });

  // Clicou em "Sim"
  yesBtn.addEventListener('click', () => {
    finalMessage.style.display = 'block';
  });

  viewLink.addEventListener('click', () => {
    // Esconde todo o resto
    signature.style.display = 'none';
    line1.style.display = 'none';
    line2.style.display = 'none';
    question.style.display = 'none';
    nextBtn.style.display = 'none';
    choices.style.display = 'none';
    finalMessage.style.display = 'none';

    // Mostra o vídeo
    videoContainer.style.display = 'block';
    videoContainer.querySelector('video').play();
  });

  noBtn.addEventListener('click', () => {
  // Esconde todo o resto
  signature.style.display = 'none';
  line1.style.display = 'none';
  line2.style.display = 'none';
  question.style.display = 'none';
  nextBtn.style.display = 'none';
  choices.style.display = 'none';
  finalMessage.style.display = 'none';

  // Mostra a mensagem de fracasso
  failMessage.style.display = 'block';
  });

  sadMusic.volume = 0.6; // volume entre 0.0 e 1.0
  sadMusic.play();
};
