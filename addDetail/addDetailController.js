import { deleteAdd, getAddById } from './addDetail.js';
import { buildAddDetail } from './addDetailView.js';
import { decodeToken } from '../utils/decodeToken.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export async function addDetailController(addDetailElement, addId, spinnerElement, notificationsElement) {  
        try {
            spinnerElement.innerHTML = buildSpinnerView(spinnerElement)

            const add = await getAddById(addId);
            addDetailElement.innerHTML = buildAddDetail(add);
            handleDeleteAddButton(addDetailElement, add);

            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading ads');

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
                        const answer = confirm('¿Está segur@ de que desea borrar el anuncio?')
                        if(answer){
                    
                            await deleteAdd(add.id)
                            notificationsElement.classList.toggle('goodNotifications')
                            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Successful loading ads');
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
    closeSessionElement.addEventListener('click', () => {
        buildSpinnerView(addDetailElement)
        localStorage.removeItem('token')
        window.location.reload()
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio se ha borrado correctamente')
        })
}