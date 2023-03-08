import { getAdds } from './adds.js'
import { buildAddView } from './addsView.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';

export async function addsListController(addListElement) {
    //Ruleta de carga
    addListElement.classList.replace('adds-list', 'spinnerView')
    addListElement.innerHTML = buildSpinnerView(addListElement); 
    let adds = [];
        
    try {
        adds = await getAdds();

        dispatchCustomEvent({ isError: false, message: 'Los anuncios se han cargado correctamente' }, addListElement)

        if (adds.length >0) {
            drawAdds(adds, addListElement) 
        } else {
            dispatchCustomEvent({isError: true, message: 'No hay anuncios disponibles, todavía...' }, addListElement)
        }
    } catch (err) {
        dispatchCustomEvent( {isError: true, message: 'No hemos podido cargar los anuncios. Inténtelo de nuevo más tarde.' }, addListElement)

    }finally {
        hideSpinner(addListElement)
    }
}

/*function hideSpinner(addListElement) {                      
    addListElement.innerHTML = '';
    addListElement.classList.replace('spinnerView', 'adds-list')
  }*/

function drawAdds(adds, addListElement) {                   
    for (const add of adds) {       
        const newAddElement = buildAddView(add);
        addListElement.appendChild(newAddElement);          
    }
}

function dispatchCustomEvent(details, addListElement){
    const event = new CustomEvent('newNotification', {
        detail: details
    })

    addListElement.dispatchEvent(event)                     //Lanza el evento customizado que hemos creado
}
