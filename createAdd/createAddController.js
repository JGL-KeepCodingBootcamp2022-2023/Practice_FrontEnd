import { createAdd } from './createAdd.js'


export const createAddController = (createAddFormElement) => {
    
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
            await createAdd(addAvatar, addName, addSelect, addPrice,addPhoto, addDescription, addTag)

            //TODO NOTIFICATION GOOD
            alert('Anucio creado correctamente')
            window.location = '/'
        } catch (error) {
            alert('no se ha podido crear el anuncio - En tryCatch')
            console.log(error)
            //TODO NOTIFICATION BAD
        }finally {
            //TODO hidespiner
        }
    })
    /*const closeSessionElement = userActionsElement.querySelector('#closeSession')
    closeSessionElement.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.reload()
      })*/
}