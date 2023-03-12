import { createAdd } from './createAdd.js'


export const createAddController = (createAddFormElement) => {
    
    //capturar el submit
    createAddFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('token')
        const closeSessionElement = userActionsElement.querySelector('#closeSession')
        closeSessionElement.addEventListener('click', () => {
            localStorage.removeItem('token')
            window.location.reload()
          })
        
        const formData = new FormData(createAddFormElement);
        const tweetContent = formData.get('addName');
        
        //const addAvatar = formData.get('userAvatar')
        //const addName = formData.get('addName');
        /*const addSelect = formData.get('addSelect');
        const addPrice = formData.get('addPrice');
        const addPhoto = formData.get('addPhoto')
        const addDescription = formData.get('addDescription');
        const addTag = formData.get('addTag');*/
    
        try {
            console.log('Se manda el anuncio')
            //TODO SPINNER
            //await createAdd(addAvatar)
            await createAdd(addName)
            //await createAdd(addSelect)
            //await createAdd(addPrice)
            //await createAdd(addPhoto)
           // await createAdd(addDescription)
           // await createAdd(addTag)
            //TODO NOTIFICATION GOOD
            alert('Anucio creado correctamente')
            window.location = '/'
        } catch (error) {

            alert('no se ha podido crear el anuncio - En tryCatch')
            //TODO NOTIFICATION BAD
        }finally {
            //TODO hidespiner
        }
    })
}