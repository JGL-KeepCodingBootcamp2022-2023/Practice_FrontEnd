import { createAdd } from './createAdd.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export const createAddController = (createAddFormElement, spinnerElement) => {
    
    //capturar el submit
    createAddFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('token')
        
        const formData = new FormData(createAddFormElement);
        
        const addAvatar = formData.get('userAvatar')
        const addName = formData.get('addName');
        const addSelect = formData.get('addSelect');
        const addPrice = formData.get('addPrice');
        const addPhoto = formData.get('addPhoto')
        const addDescription = formData.get('addDescription');
        const addTag = formData.get('addTag');
        
        try {
            //TODO SPINNER
            buildSpinnerView(createAddFormElement)
            await createAdd(addAvatar, addName, addSelect, addPrice,addPhoto, addDescription, addTag)

            //TODO NOTIFICATION GOOD
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Anucio creado correctamente')
            alert('Anucio creado correctamente')
            window.location = '/'
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'no se ha podido crear el anuncio - En tryCatch')
            alert('no se ha podido crear el anuncio - En tryCatch')
            console.log(error)
            //TODO NOTIFICATION BAD
        }finally {
            //TODO hidespiner
            hideSpinner(createAddFormElement)
        }
    })
    const closeSessionElement = userActionsElement.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.reload()
      })
}