import { getAddById, editAd } from './editAd.js';
import { buildAddDetail } from './editAdView.js';
import { decodeToken } from '../utils/decodeToken.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export async function adDetailController(addDetailElement, addId, spinnerElement, notificationsElement, userActionsElement) {  
    const token = localStorage.getItem('token')
        
    try {
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

        const add = await getAddById(addId);
        addDetailElement.innerHTML = buildAddDetail(add);

        notificationsElement.classList.add('goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading ad');
        

    } catch (error) {
        notificationsElement.classList.add('badNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `${error}`)

    }finally{
        hideSpinner(spinnerElement)
        
    }

   
    const closeSessionElement = userActionsElement.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', () => {
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
        localStorage.removeItem('token')
        notificationsElement.classList.replace('hide', 'goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
        setTimeout (() => window.location.reload(), 3500 )
        
        })
        
}
