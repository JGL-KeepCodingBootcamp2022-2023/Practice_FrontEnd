import { createAdd } from './createAdd.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export const createAddController = (createAddFormElement, spinnerElement, notificationsElement) => {
    
    //capturar el submit
    createAddFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('token')
        
        const formData = new FormData(createAddFormElement);
        
        const addAvatar = formData.get('userAvatar')
        const addName = formData.get('addName');
       
        let index = createAddFormElement.addSelect.selectedIndex
        let addSelect =  0;
        if (index === 0) {
            addSelect = 'vende';
        } else {
            addSelect = 'busca';
        }
        
        const addPrice = formData.get('addPrice');
        const addPhoto = formData.get('addPhoto');
        const addDescription = formData.get('addDescription');
        //const addTag = formData.get('addTag');
        
        try {

            spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
            await createAdd(addAvatar, addName, addSelect, addPrice,addPhoto, addDescription)
            
            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Ad successfully created.')
            window.location = '/'

        } catch (error) {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The advertisement could not be created')

        }finally {
            hideSpinner(spinnerElement)
        }
    })
    
    const closeSessionElement = document.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', (spinnerElement) => {
        //spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
        localStorage.removeItem('token')
        notificationsElement.classList.add('goodNotifications')
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, ' Successful logout')
        //hideSpinner(spinnerElement)
        window.location.reload()
        })

}