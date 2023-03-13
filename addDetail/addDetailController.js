import { deleteAdd, getAddById } from './addDetail.js';
import { buildAddDetail } from './addDetailView.js';
import { decodeToken } from '../utils/decodeToken.js';
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js';

export async function addDetailController(addDetailElement, addId) {  
        try {
            buildSpinnerView(addDetailElement)

            const add = await getAddById(addId);
            addDetailElement.innerHTML = buildAddDetail(add);
            handleDeleteAddButton(addDetailElement, add);

            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio se ha cargado correctamente')
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio solicitado no existe')
            alert(error);
        }finally{
            hideSpinner(addDetailElement)
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
                        const answer = confirm('¿Está segur@ de que desea borrar el anuncio?')
                        
                        if(answer){
                            await deleteAdd(add.id)
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
    
        const token = localStorage.getItem('token')
        const closeSessionElement = userActionsElement.querySelector('#closeSession')
        closeSessionElement.addEventListener('click', () => {
            buildSpinnerView(addDetailElement)
            localStorage.removeItem('token')
            window.location.reload()
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'El anuncio se ha borrado correctamente')
          })
}