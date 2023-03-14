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
       
        let index = createAddFormElement.addSelect.selectedIndex
        let addSelect =  0; //formData.get('addSelect');
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
            
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Anucio creado correctamente')
            window.location = '/'

        } catch (error) {

            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'no se ha podido crear el anuncio - En tryCatch')

        }finally {

            hideSpinner(spinnerElement)
        }
    })
    
    /*const closeSessionElement = userActionsElement.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.reload()
      })*/
}