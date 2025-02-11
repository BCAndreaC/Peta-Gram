import { googleLogin, login } from '../lib/config/auth.js';
import { errorMessages } from '../lib/index.js';

export const signIn = (onNavigate) => {
  const signInSection = document.createElement('section');
  const articleForm = document.createElement('article');
  const closeBtn = document.createElement('button');
  const signInForm = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const spanErrorEmail = document.createElement('span');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const spanErrorPass = document.createElement('span');
  const btnContainerSignUp = document.createElement('article');
  const btnLogin = document.createElement('button');
  const separator = document.createElement('div');
  const btnGoogle = document.createElement('button');
  const iconGoogle = document.createElement('img');
  const containerLinkSignIn = document.createElement('article');
  const askingText = document.createElement('p');
  const linkToSignUp = document.createElement('a');
  const spanText = document.createElement('span');
  const modaltitle = document.createElement('p');

  articleForm.classList.add('container-form');
  signInSection.classList.add('signIn-section');
  closeBtn.classList.add('close-signIn');
  signInForm.classList.add('signIn-form');
  emailLabel.classList.add('form');
  spanErrorEmail.classList.add('errormessage');
  spanErrorPass.classList.add('errormessage');
  btnContainerSignUp.classList.add('btn-container_signIn');
  btnLogin.classList.add('btnLogin');
  btnGoogle.classList.add('btnGoogle');
  passwordLabel.classList.add('form');
  containerLinkSignIn.classList.add('btn-container_link');
  separator.classList.add('separator');
  modaltitle.classList.add('modaltitle');

  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'loginUserEmail');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'loginUserPassword');
  spanErrorEmail.setAttribute('id', 'errorEmailMessage');
  spanErrorPass.setAttribute('id', 'errorPassMessage');
  linkToSignUp.setAttribute('id', 'link-signUp');
  btnLogin.setAttribute('type', 'button');
  btnGoogle.setAttribute('type', 'button');
  iconGoogle.setAttribute('alt', 'Google icon');
  iconGoogle.setAttribute('src', 'images/googleIcon.png');

  emailLabel.textContent = 'Correo Electronico';
  passwordLabel.textContent = 'Contraseña';
  btnLogin.textContent = 'Ingresa';
  askingText.textContent = '¿No tienes cuenta? ';
  linkToSignUp.textContent = 'Registrate aquí';
  closeBtn.innerHTML = '&times;';
  spanText.innerText = 'Acceder con Google';
  modaltitle.innerHTML = 'Ingreso';

  btnLogin.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    spanErrorEmail.textContent = '';
    spanErrorPass.textContent = '';

    login(email, password)
      .then(() => {
        onNavigate('/wall');
      })
      .catch((error) => {
        const errorCode = error.code;
        errorMessages(errorCode, spanErrorEmail, spanErrorPass);
      });
  });

  btnGoogle.addEventListener('click', () => {
    googleLogin(onNavigate);
  });

  linkToSignUp.addEventListener('click', () => {
    onNavigate('/signup');
  });

  closeBtn.addEventListener('click', () => {
    onNavigate('/');
  });

  btnGoogle.appendChild(iconGoogle);
  btnGoogle.appendChild(spanText);
  signInForm.appendChild(modaltitle);
  signInForm.appendChild(closeBtn);
  signInForm.appendChild(emailLabel);
  signInForm.appendChild(emailInput);
  signInForm.appendChild(spanErrorEmail);
  signInForm.appendChild(passwordLabel);
  signInForm.appendChild(passwordInput);
  signInForm.appendChild(spanErrorPass);
  btnContainerSignUp.appendChild(btnLogin);
  btnContainerSignUp.appendChild(separator);
  btnContainerSignUp.appendChild(btnGoogle);
  containerLinkSignIn.appendChild(askingText);
  containerLinkSignIn.appendChild(linkToSignUp);

  signInForm.appendChild(articleForm);
  signInForm.appendChild(btnContainerSignUp);
  signInForm.appendChild(containerLinkSignIn);

  signInSection.appendChild(signInForm);
  return signInSection;
};

//   section.innerHTML = `

//   <form class="signIn-form">

//     <label class="form"> Correo Electronico </label>
//     <input type="email" id="loginUserEmail">
//     <span id="errorEmailMessage" class="errormessage"></span>
//     <label class="form"> Contraseña </label>
//     <input type="password" id="loginUserPassword">
//     <span id="errorPassMessage" class="errormessage"></span>
//     <article class="btn-container_signIn">
//       <button class="btnLogin" type="submit">Ingresa</button>
//       <button class="btnGoogle" type="button"> Ingresa con Google </button>
//     </article>
//     <article class="return-home">
//       <p>¿No tienes cuenta?</p><a href="#" id="link-signIn">Registrate aqui</a>
//     </article>
//   </form>

// </section>`;
