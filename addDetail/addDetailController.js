import { getAddById } from './addDetail.js';
import { buildAddDetail } from './addDetailView.js';
import { decodeToken } from '../utils/decodeToken.js';

export async function addDetailController(addDetailElement, addId) {
    try {
        //TODO To put a spinner
        const add = await getAddById(addId);
        addDetailElement.innerHTML = buildAddDetail(add);
        handleDeleteAddButton(addDetailElement, add);
        //TODO pubSub. Notification 'El anuncio se ha cargado correctamente'}
    } catch (error) {
        //TODO pubSub. Notifications 'El anuncio solicitado no existe'
        alert(error);
    }finally{
        //TODO hide spinner
    }

    function handleDeleteAddButton(addDetailElement, add)  {
        const token = localStorage.getItem('token');
        const deleteButtonElement = addDetailElement.querySelector('#deleteAdd');

        if(!token) {
            deleteButtonElement.remove();
        }else{
            const userInfo = decodeToken(token);
            
            if(add.userId === userInfo.userId) {
                deleteButtonElement.addEventListener('click', (event) => {
                    const answer = confirm('¿Está segur@ de que desea borrar el anuncio?')
                    
                    if(answer){
                        //IR A SPARRET A BORRAR EL ADD
                        //TODO SPINNER
                        //TODO NOTIFICATION GOOD
                        //TODO HIDE SPINNER
                        window.location = '/'
                    }
                })
                
            }else{
                deleteButtonElement.remove();
            }
        }
    }


}