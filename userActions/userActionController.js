import { decodeToken } from '../utils/decodeToken.js'
import { buildSpinnerView } from '../utils/SpinnerView.js';
import { buildGreeting, buildGreeting2 } from './userActionView.js'

export function userActionsController(userActionsElement, spinnerElement) {
  const token = localStorage.getItem('token')
  
  const closeSessionElement = userActionsElement.querySelector('#closeSession')
  const payload = decodeToken(token);

  if (token) {
    const loginLinkElement = userActionsElement.querySelector('#loginLink')
    const signupLinkElement = userActionsElement.querySelector('#signupLink')
    const loggedElement = userActionsElement.querySelector('#logged')
  
    loginLinkElement.remove();
    signupLinkElement.remove();

    loggedElement.appendChild(buildGreeting(payload.username));
    
    
    closeSessionElement.addEventListener('click', () => {
      spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
      localStorage.removeItem('token');
      window.location.reload();
    })
    
    sayHello(userActionsElement, payload)

  } else {
    const createAddLinkElement = userActionsElement.querySelector('#createNewAddLink')
    createAddLinkElement.remove()
    closeSessionElement.remove()
  }

  function sayHello(userActionsElement, payload){
      const helloElement = userActionsElement.querySelector('#hello')
      helloElement.appendChild(buildGreeting2(payload.username));
      setTimeout(() => {
        helloElement.innerHTML = '';
      }, 3500)
  }

}