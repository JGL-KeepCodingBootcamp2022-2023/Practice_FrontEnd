import { getAdds } from './adds.js' // De aquí vienen los datos
import { buildAddView, buildSpinnerView } from './addsView.js'

//Obtener el array de anuncios
export async function addsListController(addListElement) {
    //Ruleta de carga
    addListElement.classList.replace('adds-list', 'spinnerView')
    addListElement.innerHTML = buildSpinnerView(); 
    let adds = [];
        
    try {
        adds = await getAdds();

        dispatchCustomEvent({ isError: false, message: 'Los anuncios se han cargado correctamente' }, addListElement)

        // Mensaje de carga correcta de anuncios
        if (adds.length >0) {
            drawAdds(adds, addListElement) //Genera HTML que pinta los anuncios
        } else {
            dispatchCustomEvent({isError: true, message: 'No hay anuncios disponibles, todavía...' }, addListElement)
        }
    } catch (err) {
        dispatchCustomEvent( {isError: true, message: 'No hemos podido cargar los anuncios. Inténtelo de nuevo más tarde' }, addListElement)
    }finally {
        hideSpinner(addListElement)
    }
}

function hideSpinner(addListElement) {
    addListElement.innerHTML = '';
    addListElement.classList.replace('spinnerView', 'adds-list')
  }

function drawAdds(adds, addListElement) {
    for (const add of adds) {       
   
        const newAddElement = buildAddView(add);
        addListElement.appendChild(newAddElement); //Añade al DOM, concretamente a section class tweet-list
    }
}

function dispatchCustomEvent(details, addListElement){
    const event = new CustomEvent('newNotification', {
        detail: {
            message: details
        }
    })

    addListElement.dispatchEvent(event)   //Lanza el evento customizado que hemos creado justo arriba en esta función
}
