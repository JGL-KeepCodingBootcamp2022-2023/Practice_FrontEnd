import { pubSub } from '../pubSub.js';
import { isMailValid } from '../utils/isMailValid.js'
import { loginUser } from './login.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';

export function loginController(loginElement, spinnerElement, notificationsElement) {
    
    loginElement.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const emailElement = loginElement.querySelector('#username')
        const passwordElement = loginElement.querySelector('#password')
        
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement);
              
        if (!isMailValid(emailElement.value)) {

            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The e-mail address entered is incorrect')
            hideSpinner(spinnerElement)
        }
        else {
            logUser(loginElement, notificationsElement, spinnerElement);               
        }
    })
    
    async function logUser(loginElement, notificationsElement, spinnerElement) {
        const formData = new FormData(loginElement);
        const username = formData.get('username');
        const password = formData.get('password');
        
        
        try {
            
            const jwt = await loginUser(username, password);
            localStorage.setItem('token', jwt)
            
            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Login successful')
            window.location = '/'
            
        } catch (error) {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Could not perform logging. Please try again later.')
            
        }finally{
            hideSpinner(spinnerElement)
            
        }

    }
}
