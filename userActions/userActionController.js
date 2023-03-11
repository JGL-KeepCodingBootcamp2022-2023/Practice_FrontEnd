import { decodeToken } from '../utils/decodeToken.js'
import { buildGreeting } from './userActionView.js'

export function userActionsController(userActionsElement) {
  const token = localStorage.getItem('token')
  
  const closeSessionElement = userActionsElement.querySelector('#closeSession') //No me está enseñando el botón

  if (token) {
    const loginLinkElement = userActionsElement.querySelector('#loginLink')
    const signupLinkElement = userActionsElement.querySelector('#signupLink')
    loginLinkElement.remove()
    signupLinkElement.remove()

    const payload = decodeToken(token)
    userActionsElement.appendChild(buildGreeting(payload.username))
    closeSessionElement.addEventListener('click', () => {
      localStorage.removeItem('token')
      window.location.reload()
    })

  } else {
    const createTweetLinkElement = userActionsElement.querySelector('#createNewAddLink')
    createTweetLinkElement.remove()
    closeSessionElement.remove()
  }


}