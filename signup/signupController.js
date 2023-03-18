import { pubSub } from "../pubSub.js";
import { createUser } from "./signup.js";
import { isMailValid } from '../utils/isMailValid.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { closeSession } from "../utils/closeSession.js";
import { closeSessionBefore } from "./signupView.js";


export function signupController(signupElement, spinnerElement, closeSessionBeforeElement, notificationsElement) {
  const token = localStorage.getItem('token')

  if(token) {   
    closeSessionBeforeElement.innerHTML = closeSessionBefore() 
  }

  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');
    
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

    if (isMailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
          
          try {
            await createUser(emailElement.value, passwordElement.value)
            signupElement.reset();
            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'User created successfully.')
            window.location = '/'
            
          } catch (error) {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'It was not possible to create a user. Please try again later.')

          }finally{
            hideSpinner(spinnerElement)
          }
    }
  
    
  })

  closeSession(spinnerElement, notificationsElement)

function isPasswordValid(password, passwordConfirmation, notificationsElement) {
  if (password !== passwordConfirmation) {

    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    notificationsElement.classList.add('badNotifications')
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Passwords must be the same.')
    hideSpinner(spinnerElement)
    return false
  }

  return true
  }
}