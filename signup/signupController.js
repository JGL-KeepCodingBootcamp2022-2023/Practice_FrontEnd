import { pubSub } from "../pubSub.js";
import { createUser } from "./signup.js";
import { isMailValid } from '../utils/isMailValid.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';

export function signupController(signupElement, spinnerElement) {

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

            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Usuario creado correctamente')
            window.location = '/'
            
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)

          }finally{
            hideSpinner(spinnerElement)
          }
    }
  })

function isPasswordValid(password, passwordConfirmation) {
  if (password !== passwordConfirmation) {

    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Las contraseñas no son iguales')
    hideSpinner(spinnerElement)
    return false
  }

  return true
  }
}
    
    
    
