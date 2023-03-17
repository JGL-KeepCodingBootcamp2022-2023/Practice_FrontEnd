import { decodeToken } from '../utils/decodeToken.js'
import { buildSpinnerView } from '../utils/SpinnerView.js';
import { buildGreeting } from './userActionView.js'


export function userActionsController(userActionsElement) {
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
    
    
    /*closeSessionElement.addEventListener('click', (spinnerElement) => {
      spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
      localStorage.removeItem('token')
      notificationsElement.classList.remove('hide')
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
      hideSpinner(spinnerElement)
      setTimeout (() => window.location.reload(), 3500);
    })*/

  } else {
    const createAddLinkElement = userActionsElement.querySelector('#createNewAddLink')
    createAddLinkElement.remove()
    closeSessionElement.remove()
  }

}