import { decodeToken } from '../utils/decodeToken.js'
import { buildGreeting, buildGreeting2 } from './userActionView.js'

export function userActionsController(userActionsElement) {
  const token = localStorage.getItem('token')
  
  const closeSessionElement = userActionsElement.querySelector('#closeSession')

  if (token) {
    const loginLinkElement = userActionsElement.querySelector('#loginLink')
    const signupLinkElement = userActionsElement.querySelector('#signupLink')
    const loggedElement = userActionsElement.querySelector('#logged')
  
    loginLinkElement.remove();
    signupLinkElement.remove();

    const payload = decodeToken(token);
    loggedElement.appendChild(buildGreeting(payload.username));
    
    sayHello(userActionsElement, payload)

    closeSessionElement.addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location.reload();
    })

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