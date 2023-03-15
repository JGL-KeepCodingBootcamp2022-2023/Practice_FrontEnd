import { pubSub } from '../pubSub.js';
import { isMailValid } from '../utils/isMailValid.js'
import { loginUser } from './login.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';

export function loginController(loginElement, spinnerElement) {
    loginElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailElement = loginElement.querySelector('#username')
        const passwordElement = loginElement.querySelector('#password')
    
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

        if (!isMailValid(emailElement.value)) {

            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El mail no está escrito correctamente')
            hideSpinner(spinnerElement)
        }
        
        else {
            logUser(loginElement);               
        }
    })
}

async function logUser(loginElement) {
    const formData = new FormData(loginElement);
    const username = formData.get('username');
    const password = formData.get('password');
    
    try {

        const jwt = await loginUser(username, password);
        localStorage.setItem('token', jwt)

        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Login successful')
        window.location = '/'
        
    } catch (error) {

        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Email inválido')
        hideSpinner(spinnerElement)

    }
}