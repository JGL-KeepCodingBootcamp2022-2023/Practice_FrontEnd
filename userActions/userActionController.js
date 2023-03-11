import { decodeToken } from '../utils/decodeToken.js'
import { buildGreeting } from './userActionView.js'

export function userActionsController(userActionElement) {
  const token = localStorage.getItem('token')
  const closeSessionElement = userActionElement.querySelector('#closeSession')

  if (token) {
    const loginLinkElement = userActionElement.querySelector('#loginLink')
    const signupLinkElement = userActionElement.querySelector('#signupLink')
    loginLinkElement.remove()
    signupLinkElement.remove()

    const payload = decodeToken(token)
    userActionElement.appendChild(buildGreeting(payload.username))

    closeSessionElement.addEventListener('click', () => {
      localStorage.removeItem('token')
      //TODO RULETA DE CARGA
      //TODO NOTIFICATION OK
      //TODO HIDE RULETA DE CARGA
      window.location.reload()
    })
  } else {
    const createNewAddLink = userActionElement.querySelector('#createNewAddLink')
    createNewAddLink.remove()
  }
}