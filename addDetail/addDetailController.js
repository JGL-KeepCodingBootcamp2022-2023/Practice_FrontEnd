import { deleteAdd, getAddById } from './addDetail.js';
import { buildAddDetail } from './addDetailView.js';
import { decodeToken } from '../utils/decodeToken.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export async function addDetailController(addDetailElement, addId, spinnerElement, notificationsElement, userActionsElement) {  
        
    try {
            spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

            const add = await getAddById(addId);
            addDetailElement.innerHTML = buildAddDetail(add);
            handleDeleteAddButton(addDetailElement, add);

            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading ad');

        } catch (error) {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, `Unable to load the ad.Please try again later.`)

        }finally{
            hideSpinner(spinnerElement)
        }

        function handleDeleteAddButton(addDetailElement, add)  {
            const token = localStorage.getItem('token');
            const deleteButtonElement = addDetailElement.querySelector('#deleteAdd');

            if(!token) {
                deleteButtonElement.remove();
            }else{
                const userInfo = decodeToken(token);
                
                if(add.userId === userInfo.userId) {
                    deleteButtonElement.addEventListener('click', async () => {
                        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
                        const answer = confirm('Are you sure you want to delete the ad?')
                        if(answer){
                    
                            await deleteAdd(add.id)
                            notificationsElement.classList.toggle('goodNotifications')
                            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The ad has been successfully deleted');
                            hideSpinner(spinnerElement)
                            window.location = '/'
                        }
                    })                
                }else{
                    deleteButtonElement.remove();
                }
            }
        }
    
    const token = localStorage.getItem('token')
    
    const closeSessionElement = userActionsElement.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', (spinnerElement) => {
        spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
        localStorage.removeItem('token')
        notificationsElement.classList.replace('hide', 'goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
        hideSpinner(spinnerElement)
        window.location.reload()
        })
}