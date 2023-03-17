import { getAdds } from './adds.js'
import { buildAddView } from './addsView.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js'


export async function addsListController(addListElement, spinnerElement, notificationsElement) {
    //Ruleta de carga
    spinnerElement.innerHTML = buildSpinnerView(spinnerElement); 
    let adds = [];
    
    try {
        adds = await getAdds();
        
        if (adds.length >0) {
            
            drawAdds(adds, addListElement) 
            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading adds');
            
        } else {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No adds yet. Sorry!');
        }
        
    } catch (err) {
        notificationsElement.classList.add('badNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Unable to load ads. Please try again later.')
        
    }finally {
        hideSpinner(spinnerElement)
    }

    const closeSessionElement = document.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', (spinnerElement) => {
        //spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
        localStorage.removeItem('token')
        notificationsElement.classList.replace('hide', 'goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
        //hideSpinner(spinnerElement)
        window.location.reload()
        })
}

function drawAdds(adds, addListElement) {                   
    for (const add of adds) {       
        const newAddElement = buildAddView(add);
        addListElement.appendChild(newAddElement);          
    }
}


