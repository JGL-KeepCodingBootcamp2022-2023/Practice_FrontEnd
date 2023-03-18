import { editAd } from "./editAd.js";
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export function editAdController(editAdFormElement, spinnerElement, notificationsElement) {
    editAdFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token')

        const formData = new FormData(editAdFormElement);
        
        const editAvatar = formData.get('userAvatar')
        const editName = formData.get('editName');
       
        let index = editAdFormElement.editSelect.selectedIndex
        let editSelect =  0;
        if (index === 0) {
            editSelect = 'vende';
        } else {
            editSelect = 'busca';
        }
        
        const editPrice = formData.get('editPrice');
        const editPhoto = formData.get('editPhoto');
        const editDescription = formData.get('editDescription');
        /*let tags = formData.get('editTag');
        let editTag = tags.split(',')*/

        try {

            spinnerElement.innerHTML = buildSpinnerView(spinnerElement)
            await editAd(editAvatar, editName, editSelect, editPrice,editPhoto, editDescription)
            
            notificationsElement.classList.add('goodNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Ad successfully edited.')
            window.location = '/'

        } catch (error) {
            notificationsElement.classList.add('badNotifications')
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'The advertisement could not be edited')

        }finally {
            hideSpinner(spinnerElement)
        }
    })

}