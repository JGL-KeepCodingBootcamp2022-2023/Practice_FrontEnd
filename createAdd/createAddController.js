import { createAdd } from './createAdd.js'

export const createAddController = (createAddFormElement) => {
    //capturar el submit
    createAddFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();

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
            await createAdd(addAvatar)
            await createAdd(addName)
            await createAdd(addSelect)
            await createAdd(addPrice)
            await createAdd(addPhoto)
            await createAdd(addDescription)
            await createAdd(addTag)
            //TODO NOTIFICATION GOOD
        } catch (error) {
            alert(error)
            //TODO NOTIFICATION BAD
        }finally {
            //TODO hidespiner
        }
    })
}