import { deleteAdd, getAddById } from './addDetail.js';
import { buildAddDetail } from './addDetailView.js';
import { decodeToken } from '../utils/decodeToken.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export async function addDetailController(addDetailElement, addId, spinnerElement, notificationsElement, userActionsElement) {  
    const token = localStorage.getItem('token')
        
    try {
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

        const add = await getAddById(addId);
        addDetailElement.innerHTML = buildAddDetail(add);
        handleEditAndDeleteAdButton(addDetailElement, add);

        notificationsElement.classList.add('goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading ad');

    } catch (error) {
        notificationsElement.classList.add('badNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `${error}`)

    }finally{
        hideSpinner(spinnerElement)
    }

    function handleEditAndDeleteAdButton(addDetailElement, add)  {
        const token = localStorage.getItem('token');
        const deleteButtonElement = addDetailElement.querySelector('#deleteAdd');
        const editButtonElement = addDetailElement.querySelector('#editAd')
        

        if(!token) {
            deleteButtonElement.remove();
            editButtonElement.remove();
            
        }else{
            const userInfo = decodeToken(token);
            
            if(add.userId === userInfo.userId) {
                deleteButtonElement.addEventListener('click', async () => {
                    spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
                    const answer = confirm('Are you sure you want to delete the ad?')
                    if(answer){
                
                        await deleteAdd(add.id)
                        notificationsElement.classList.replace('hide', 'goodNotifications')
                        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The ad has been successfully deleted');
                        window.location = '/'
                    }
                    hideSpinner(spinnerElement)
                })                
            }else{
                deleteButtonElement.remove();
                editButtonElement.remove();

            }
        }
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