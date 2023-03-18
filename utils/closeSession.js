import { pubSub } from '../pubSub.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';

export function closeSession (spinnerElement, notificationsElement){
    
    const closeSessionElement = document.querySelector('.closeSessions')
    closeSessionElement.addEventListener('click', () => {
        
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
        localStorage.removeItem('token')
        notificationsElement.classList.remove('hide')
        notificationsElement.classList.add('goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
        setTimeout (() => window.location.reload(), 3500 )
        })
}