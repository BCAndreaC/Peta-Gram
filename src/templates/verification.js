const verification = (onNavigate) => {
  const verificationSection = document.createElement('section');
  const petsImages = document.createElement('article');
  const perrito1 = document.createElement('img');
  const animalito2 = document.createElement('img');
  const animalito3 = document.createElement('img');
  const animalito4 = document.createElement('img');
  const animalito5 = document.createElement('img');
  const animalito6 = document.createElement('img');
  const animalito7 = document.createElement('img');
  const animalito8 = document.createElement('img');
  const animalito9 = document.createElement('img');
  const articleLogo = document.createElement('article');
  const logo = document.createElement('img');
  const articleVerificationContainer = document.createElement('article');
  const imgGirlCat = document.createElement('img');
  const articleMessage = document.createElement('article');
  const spanThanks = document.createElement('span');
  const spanPeta = document.createElement('span');
  const spanGram = document.createElement('span');
  const spanVerify = document.createElement('span');
  const articleSignInLink = document.createElement('article');
  const spanSignInAsk = document.createElement('span');
  const spanSignInLink = document.createElement('span');
  const deg = document.createElement('article');

  verificationSection.classList.add('verification-section');
  petsImages.classList.add('pets-images');
  perrito1.classList.add('item-a');
  animalito2.classList.add('item-b');
  animalito3.classList.add('item-c');
  animalito4.classList.add('item-d');
  animalito5.classList.add('item-e');
  animalito6.classList.add('item-d');
  animalito7.classList.add('item-f');
  animalito8.classList.add('item-j');
  animalito9.classList.add('item-f');
  articleLogo.classList.add('verification-logo');
  articleVerificationContainer.classList.add('verification-container');
  imgGirlCat.classList.add('verification-desktop');
  articleMessage.classList.add('verification-message');
  spanThanks.classList.add('thanks-message');
  spanPeta.classList.add('peta');
  spanGram.classList.add('gram');
  spanVerify.classList.add('verify-message');
  articleSignInLink.classList.add('signIn-link');
  spanSignInAsk.classList.add('verification');
  spanSignInLink.classList.add('signIn');
  deg.classList.add('deg');

  perrito1.setAttribute('src', 'images/perrito1.png');
  perrito1.setAttribute('alt', 'perrito1');
  animalito2.setAttribute('src', 'images/animalito2.png');
  animalito2.setAttribute('alt', 'animalito2');
  animalito3.setAttribute('src', 'images/animalito3.png');
  animalito3.setAttribute('alt', 'animalito3');
  animalito4.setAttribute('src', 'images/animalito4.png');
  animalito4.setAttribute('alt', 'animalito4');
  animalito5.setAttribute('src', 'images/animalito5.png');
  animalito5.setAttribute('alt', 'animalito5');
  animalito6.setAttribute('src', 'images/animalito6.png');
  animalito6.setAttribute('alt', 'animalito6');
  animalito7.setAttribute('src', 'images/animalito7.png');
  animalito7.setAttribute('alt', 'animalito7');
  animalito8.setAttribute('src', 'images/animalito8.png');
  animalito8.setAttribute('alt', 'animalito8');
  animalito9.setAttribute('src', 'images/animalito9.png');
  animalito9.setAttribute('alt', 'animalito9');
  logo.setAttribute('src', 'images/logo.png');
  logo.setAttribute('alt', 'logo');
  imgGirlCat.setAttribute('src', 'images/girl-cat-reading.png');
  imgGirlCat.setAttribute('alt', 'girl-cat-reading');

  spanThanks.innerHTML = '¡Gracias por unirte a <span class="peta">Peta</span><span class="gram">gram</span>, la red social para mascotas!';
  spanVerify.textContent = 'Necesitamos que verifiques tu correo electronico para completar tu registro';
  spanSignInAsk.textContent = '¿Ya verificaste tu cuenta?';
  spanSignInLink.textContent = 'Ingresa aquí';

  spanSignInLink.addEventListener('click', () => {
    onNavigate('/signin');
  });

  petsImages.appendChild(perrito1);
  petsImages.appendChild(animalito2);
  petsImages.appendChild(animalito3);
  petsImages.appendChild(animalito4);
  petsImages.appendChild(animalito5);
  petsImages.appendChild(animalito6);
  petsImages.appendChild(animalito7);
  petsImages.appendChild(animalito8);
  petsImages.appendChild(animalito9);
  articleLogo.appendChild(logo);
  articleVerificationContainer.appendChild(imgGirlCat);
  articleMessage.appendChild(spanThanks);
  articleMessage.appendChild(spanPeta);
  articleMessage.appendChild(spanGram);
  articleMessage.appendChild(spanVerify);
  articleSignInLink.appendChild(spanSignInAsk);
  articleSignInLink.appendChild(spanSignInLink);
  articleMessage.appendChild(articleSignInLink);
  articleVerificationContainer.appendChild(articleMessage);
  verificationSection.appendChild(petsImages);
  verificationSection.appendChild(articleLogo);
  verificationSection.appendChild(articleVerificationContainer);
  verificationSection.appendChild(deg);

  return verificationSection;
};

export default verification;
