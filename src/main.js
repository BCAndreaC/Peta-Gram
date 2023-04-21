import { home } from './templates/home';
import { signup } from './templates/signUp';
import verification from './templates/verification';
import { authFunction } from './lib/config/auth';

const root = document.getElementById('content');
export const routes = {
  '/': home,
  '/signup': signup,
  '/verification': verification,
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component());
};

root.appendChild(component());

const onNavigate = (pathname) => {
  root.removeChild(root.firstChild);
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname]());
};
const onAuthSuccess = (pathname) => {
  root.removeChild(root.firstChild);
  onNavigate(pathname);
};

function authSignUp() {
  onNavigate('/signup');
  const btnRegister = document.querySelector('.signUp-form');
  const email = document.getElementById('userEmail');
  const password = document.getElementById('userPassword');

  authFunction(btnRegister, email, password, onAuthSuccess);
  /*   .then(() => onNavigate('/verification'))
    .catch((error) => console.error(error)); */
  // authFunction(btnRegister, email, password,);
  // console.log(authFunction);
  // btnRegister.addEventListener('submit', () => {
  //   onNavigate('/verification');
  /* console.log('se lee o no?'); */
}

function close() {
  const closeBtn = document.querySelector('.close');
  // const modal = document.querySelector('.signUp-section');

  closeBtn.addEventListener('click', () => {
    // modal.style.display = 'none';
    // window.history.back();
    onAuthSuccess('/');
  });
}
function signUpScreen() {
  authSignUp();
  close();
}
const btnSignUp = document.querySelector('.btnSignUp');
if (btnSignUp) {
  btnSignUp.addEventListener('click', () => {
    signUpScreen();
  });
}

// const router = async () => {
//   const content = null || document.getElementById('content');
//   const message = 'ERROR 404';
//   const hash = getHash();
//   const route = await resolveRoutes(hash);
//   const render = routes[route] ? routes[route] : message;
//   content.appendChild(render());
// };
// const router = async (pathname = window.location.pathname) => {
//   const content = null || document.getElementById('content');
//   const template = routes[pathname];
//   if (template) {
//     content.innerHTML = await template();
//   } else {
//     content.innerHTML = 'La página solicitada no existe';
//   }
// };
