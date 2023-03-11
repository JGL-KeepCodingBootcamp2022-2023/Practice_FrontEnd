import { getAdds } from './adds.js'
import { buildAddView } from './addsView.js'
import { buildSpinnerView, hideSpinner } from '../utils/SpinnerView.js';
import { pubSub } from '../pubSub.js'

export async function addsListController(addListElement) {
    //Ruleta de carga
    addListElement.classList.replace('adds-list', 'spinnerView')
    addListElement.innerHTML = buildSpinnerView(addListElement); 
    let adds = [];
     
    try {
        adds = await getAdds();

        //dispatchCustomEvent({ isError: false, message: 'Los anuncios se han cargado correctamente' }, addListElement)
        
        if (adds.length >0) {
            alert('Todos Los anuncios se cargaron correctamente')
            //pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Los anuncios se han cargado correctamente');
            drawAdds(adds, addListElement) 
            console.log(adds.status)
        } else {
            alert('No hay anuncios disponibles')
            //pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hay anuncios disponibles, todavía...');
            //dispatchCustomEvent({isError: true, message: 'No hay anuncios disponibles, todavía...' }, addListElement)
        }
    } catch (err) {
        alert('no se han podido cargar los anuncios')
        //pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'No hemos podido cargar los anuncios. Inténtelo de nuevo más tarde.')
        //dispatchCustomEvent( {isError: true, message: 'No hemos podido cargar los anuncios. Inténtelo de nuevo más tarde.' }, addListElement)

    }finally {
        addListElement.classList.replace('spinnerView', 'adds-list')
        hideSpinner(addListElement)
    }
}

function drawAdds(adds, addListElement) {                   
    for (const add of adds) {       
        const newAddElement = buildAddView(add);
        addListElement.appendChild(newAddElement);          
    }
}

/*function dispatchCustomEvent(details, addListElement){
    const event = new CustomEvent('newNotification', {
        detail: details
    })

    addListElement.dispatchEvent(event)                     //Lanza el evento customizado que hemos creado
}*/
